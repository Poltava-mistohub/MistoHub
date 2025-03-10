import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';

import { postData } from '/src/services/API.js';

import { JoinModalStyled } from './BookEvent.styled';
import CloseButton from '../CloseButton/CloseButton';
import ErrorBlock from './ErrorBlock';
import PostedBlock from './PostedBlock';
import Maska from './Maska';
import Info from './Info';
import Loader from '/src/components/Loader/Loader';

const EventDataSchema = Yup.object().shape({
  name: Yup.string()
    .required(`Ім'я обов'язкове для заповнення!`)
    .min(2, `Ім'я має бути мінімум 2 символи!`)
    .max(50, `Ім'я занадто довге!`),
  lastname: Yup.string()
    .required(`Прізвище обов'язкове для заповнення!`)
    .min(2, 'Прізвище має бути мінімум 2 символи!')
    .max(50, `Прізвище занадто довге!`),
  phone: Yup.string()
    .required(`Номер телефону обов'язковий!`)
    .matches(/^\+380\d{9}$/, 'Невірний формат'),
  date_time: Yup.string()
    .min(2, `Необхідно вказати`)
    .required(`Необхідно вказати`),
  expected_guests: Yup.number()
    .required(`Необхідно вказати`)
    .min(1, 'Мінімум 1 гість')
    .max(9999, 'Вау, ви очікуєте багато гостей!'),
  event_type: Yup.string()
    .oneOf(
      ['Лекція', 'Концерт', 'Майстер-клас', 'Презентація', 'Квартирник'],
      'Невірний тип'
    ),
  event_type_custom: Yup.string()
    .when('event_type', {
      is: val => !val,
      then: schema => schema
        .required(`Необхідно вказати`)
        .min(2, 'Мінімум 2 символи'),
    }),
  // checkbox for agreement
  agreement: Yup.string()
    .required('Необхідно погодитися з правилами')
    .matches(/on/, 'Необхідно погодитися з правилами'),
});

const INITIAL_FORM_DATA = {
  name: '',
  lastname: '',
  phone: '',
  date_time: '',
  expected_guests: '',
  event_type: '',
  event_type_custom: '',
  agreement: 'off',
};

const BookModal = ({ controlsModal: { isModalOpen, closeModal } }) => {
  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getInitialValues = useCallback(() => {
    const data = sessionStorage.getItem('bookEvent');
    return {
      ...(data ? JSON.parse(data) : INITIAL_FORM_DATA),
      agreement: false, // checkbox for agreement should not be auto-populated
    };
  }, []);

  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const handleCloseModal = () => {
    setIsError(false);
    setIsLoading(false);
    setIsDataPosted(false);
    closeModal('event_booking_modal');
  };

  const MyHandleChange = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;

    const toSet = {
      [name]: value,
    };

    if (name === 'event_type') {
      toSet.event_type_custom = '';
    }

    if (name === 'event_type_custom') {
      toSet.event_type = '';
    }

    formik.setValues((prevValues) => ({
      ...prevValues,
      ...toSet,
    }));


    sessionStorage.setItem(
      'bookEvent',
      JSON.stringify({ ...formik.values, [name]: value })
    );
  };

  const handleSubmit = async (values) => {
    const textedData = [
      `<b>${values.name} ${values.lastname}</b>`,
      `Телефон: <b>${values.phone}</b>`,
      `Дата та час: <b>${values.date_time}</b>`,
      `Очікувана кількість гостей: <b>${values.expected_guests}</b>`,
      `Форма заходу: <b>${values.event_type} ${values.event_type_custom ? `(${values.event_type_custom})` : ''}</b>`,
      `Погодження з правилами: <b>${values.agreement === 'on' ? 'Так' : 'Ні'}</b>`,
    ].join('\n');

    try {
      setIsLoading(true);

      const data = await postData(textedData);

      if (data.result.text !== '') {
        setIsDataPosted(true);
        formik.resetForm();
        sessionStorage.removeItem('bookEvent');
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: EventDataSchema,
    onSubmit: handleSubmit,
  });

  const renderTextField = (name, label, placeholder = null, other = {}) => (
    <li className="joinFields">
      <label className="joinLabel" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        onBlur={formik.handleBlur}
        onChange={MyHandleChange}
        value={formik.values[name]}
        {...other}
        className={[
          'joinInput',
          formik.errors[name] && formik.touched[name] ? 'errorInput' : '',
          other.className || '',
        ].join(' ')}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </li>
  );

  return (
    <JoinModalStyled
      isOpen={isModalOpen.event_booking_modal}
      onRequestClose={handleCloseModal}
      style={{ overlay: { zIndex: '101' } }}
      bodyOpenClassName="modal-open"
    >
      {isLoading && (
        <Loader
          style={{
            display: 'block',
            overlay: { zIndex: '999' },
            width: '100vw',
            height: '100vh',
          }}
        />
      )}
      <div className="headerContainer">
        <p>Провести подію</p>
        <CloseButton onClose={handleCloseModal} />
      </div>
      <div className="joinMainContainer">
        <div>
          {!isDataPosted && !isError && (
            <form className="joinForm" onSubmit={formik.handleSubmit}>
              <h2 className="joinTitle">
                Забронюй свій івент у <br />
                МІСТОХАБ
              </h2>
              <ul className="joinList">
                {renderTextField('name', 'Ім’я*')}
                {renderTextField('lastname', 'Прізвище*')}
                {renderTextField('phone', 'Телефон*', '+380')}
                {renderTextField(
                  'date_time',
                  'Бажана дата та час',
                  '*мінімальне бронювання 2 години'
                )}
                <li className="joinFields">
                  <ul>
                    <li className="joinFields">
                      <label className="joinLabel joinCheckboxTitle" htmlFor="event_type">
                        Форма заходу
                      </label>
                      <div className="joinCheckboxContainer">
                        <div>
                          {[
                            'Лекція',
                            'Концерт',
                            'Майстер-клас',
                            'Презентація',
                            'Квартирник',
                          ].map((type) => (
                            <label
                              key={type}
                              className="joinCheckboxLabel"
                              htmlFor={type}
                            >
                              <input
                                type="radio"
                                id={type}
                                name="event_type"
                                value={type}
                                checked={formik.values.event_type === type}
                                onChange={MyHandleChange}
                              />{' '}
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>
                      {formik.errors.event_type &&
                        formik.touched.event_type && (
                          <div className="error">
                            {formik.errors.event_type}
                          </div>
                        )}
                      <input
                        className={`joinInput m_small ${formik.errors.event_type_custom && formik.touched.event_type_custom ? 'errorInput' : ''}`}
                        id="event_type_custom"
                        name="event_type_custom"
                        type="text"
                        placeholder="Інше"
                        onBlur={formik.handleBlur}
                        onChange={MyHandleChange}
                        value={formik.values.event_type_custom}
                      />
                      {formik.errors.event_type_custom &&
                        formik.touched.event_type_custom && (
                          <div className="error">
                            {formik.errors.event_type_custom}
                          </div>
                        )}
                    </li>
                    {renderTextField(
                      'expected_guests',
                      'Очікувана кількість гостей*',
                      null,
                      { min: 0, type: 'number', className: 'm_small' }
                    )}
                  </ul>
                </li>
                <li className="joinField">
                  <ul>
                    <li className="joinFields m_wide">
                      <label
                        className="joinLabel agreementLabel fieldSize"
                        htmlFor="agreement"
                      >
                        <input
                          type="checkbox"
                          id="agreement"
                          checked={formik.values.agreement === 'on'}
                          name="agreement"
                          onChange={MyHandleChange}
                        />
                        Я ознайомлений(а) з правилами роботи подієвого простору
                        та приймаю всі умови
                      </label>
                      {formik.errors.agreement && formik.touched.agreement && (
                        <div className="error">{formik.errors.agreement}</div>
                      )}
                    </li>
                    <li className="fieldSize rules">
                      <h3>💰 Вартість:</h3><br/>
                      <ul>
                        <li>• 1500 грн/год – половина зали (42 місця)</li>
                        <li>• 2500 грн/год – вся зала (80 місць)</li>
                        <li>• Мінімальне бронювання – 2 години</li>
                      </ul>
                      <h3>Як забронювати?</h3><br/>
                      <ul>
                        <li>
                          ✔️ Оплата – 100% передплата на рахунок ГО “МІСТО ХАБ”
                        </li>
                        <li>
                          ✔️ Якщо плани зміняться – можемо перенести дату за
                          погодженням з адміністратором
                        </li>
                      </ul>
                      <h3>Головне про використання простору</h3><br/>
                      <ul>
                        <li>
                          🙌🏻 Дбайте про порядок і майно – це спільний простір.
                        </li>
                        <li>
                          🕒 Використовуйте залу в межах заброньованого часу.
                        </li>
                        <li>
                          🚫 Червоні лінії: без російськомовних матеріалів,
                          політичного піару чи маніпуляцій.
                        </li>
                        <li>
                          ‼️ Якщо є пошкодження майна – організатор відшкодовує
                          ремонт або заміну.
                        </li>
                      </ul>
                      <h3>📞 Як зв’язатися?</h3><br/>
                      Телефон: <a href='tel:+380958282172'>+380958282172</a> (Олександра)<br />
                      Email: <a href="mailto:mistohub@gmail.com">mistohub@gmail.com</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button
                className="joinSubmitBtn"
                type="submit"
                title="Відправити дані"
                aria-label="Відправити"
              >
                Відправити
              </button>
            </form>
          )}
          {isDataPosted && <PostedBlock handleCloseModal={handleCloseModal} />}
          {isError && <ErrorBlock handleCloseModal={handleCloseModal} />}
        </div>
        {isDesktop && <Maska />}
      </div>
      <Info />
    </JoinModalStyled>
  );
};

export default BookModal;
