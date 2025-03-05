import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import * as Yup from 'yup';

import { postData } from '/src/services/API.js';

import { JoinModalStyled } from '/src/shared/Modals/JoinModal/JoinModal.styled';
import ErrorBlock from '/src/shared/Modals/JoinModal/ErrorBlock';
import PostedBlock from '/src/shared/Modals/JoinModal/PostedBlock';
import Maska from '/src/shared/Modals/JoinModal/Maska';
import Info from '/src/shared/Modals/JoinModal/Info';
import Loader from '/src/components/Loader/Loader';
import CloseButton from '../CloseButton/CloseButton';

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
  event_type: Yup.string() // options, one of or custom
    .required(`Необхідно вказати`)
    .oneOf(
      ['Лекція', 'Концерт', 'Майстер-клас', 'Презентація', 'Квартирник'],
      'Невірний тип'
    ),
  event_type_custom: Yup.string().when('event_type', {
    is: 'custom',
    then: Yup.string()
      .required(`Необхідно вказати`)
      .min(2, 'Мінімум 2 символи'),
  }),
  // checkbox for agreement
  agreement: Yup.string().oneOf(['on'], 'Необхідно погодитися з правилами'),
});

const BookModal = ({ controlsModal: { isModalOpen, closeModal } }) => {
  const INITIAL_FORM_DATA = {
    name: '',
    lastname: '',
    phone: '',
    date_time: '',
    expected_guests: '',
    event_type: '',
    event_type_custom: '',
    agreement: false,
  };

  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const handleCloseModal = () => {
    setIsError(false);
    setIsLoading(false);
    setIsDataPosted(false);
    closeModal('join_modal');
  };

  const MyHandleChange = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;

    formik.setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    sessionStorage.setItem(
      'bookEvent',
      JSON.stringify({ ...formik.values, [name]: value })
    );
  };

  const handleSubmit = async (values) => {
    const textedData = `<b>Ім’я: ${values.name}</b>\n<b>Прізвище: ${values.lastname}</b>\nТелефон: <b>${values.phone}</b>\nІнстаграм/Фейсбук: <b>${values.link}</b>\nПро себе:${values.about}`;

    try {
      setIsLoading(true);

      // const data = await postData(textedData);
      const data = { result: { text: textedData } };
      console.log(data);

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
    initialValues: sessionStorage.getItem('bookEvent')
      ? JSON.parse(sessionStorage.getItem('bookEvent'))
      : INITIAL_FORM_DATA,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: EventDataSchema,
    onSubmit: handleSubmit,
  });

  console.log(formik);

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
        <p>Підтримати проєкт</p>
        <CloseButton onClose={handleCloseModal} />
      </div>
      <div className="joinMainContainer">
        <div>
          {!isDataPosted && !isError && (
            <form className="joinForm" onSubmit={formik.handleSubmit}>
              <h2 className="joinTitle">
                Приєднуйся до спільноти <br />
                <span className="joinTitleAccent">супергероїв</span> міста!
              </h2>
              <ul className="joinList">
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="name">
                    Ім’я*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.name && formik.touched.name ? 'errorInput' : ''}`}
                    id="name"
                    name="name"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="error">{formik.errors.name}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="lastname">
                    Прізвище*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.lastname && formik.touched.lastname ? 'errorInput' : ''}`}
                    id="lastname"
                    name="lastname"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.lastname}
                  />
                  {formik.errors.lastname && formik.touched.lastname && (
                    <div className="error">{formik.errors.lastname}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="phone">
                    Телефон*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.phone && formik.touched.phone ? 'errorInput' : ''}`}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+380"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="error">{formik.errors.phone}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="date_time">
                    Бажана дата та час
                    <br />
                    *мінімальне бронювання 2 години
                  </label>
                  <input
                    className={`joinInput ${formik.errors.date_time && formik.touched.date_time ? 'errorInput' : ''}`}
                    id="date_time"
                    name="date_time"
                    type="text"
                    placeholder=""
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.date_time}
                  />
                  {formik.errors.date_time && formik.touched.date_time && (
                    <div className="error">{formik.errors.date_time}</div>
                  )}
                </li>
                <li className="joinFields">
                  <ul>
                    <li>
                      {/* set of checkboxes to pick one of types or enter custom */}
                      <label className="joinLabel" htmlFor="event_type">
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
                            <label key={type} className="joinCheckboxLabel" htmlFor={type}>
                              <input
                                type="radio"
                                id={type}
                                name="event_type"
                                value={type}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  MyHandleChange(e);
                                }}
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
                        className={`joinInput ${formik.errors.event_type_custom && formik.touched.event_type_custom ? 'errorInput' : ''}`}
                        id="event_type_custom"
                        name="event_type_custom"
                        type="text"
                        placeholder="Інше"
                        onBlur={formik.handleBlur}
                        onChange={(e) => {
                          formik.handleChange(e);
                          MyHandleChange(e);
                        }}
                        value={formik.values.event_type_custom}
                      />
                      {formik.errors.event_type_custom &&
                        formik.touched.event_type_custom && (
                          <div className="error">
                            {formik.errors.event_type_custom}
                          </div>
                        )}
                    </li>
                    <li>
                      <label className="joinLabel" htmlFor="expected_guests">
                        Очікувана кількість гостей*
                      </label>
                      <input
                        className={`joinInput ${formik.errors.expected_guests && formik.touched.expected_guests ? 'errorInput' : ''}`}
                        id="expected_guests"
                        name="expected_guests"
                        type="number"
                        onBlur={formik.handleBlur}
                        onChange={(e) => {
                          formik.handleChange(e);
                          MyHandleChange(e);
                        }}
                        value={formik.values.expected_guests}
                      />
                      {formik.errors.expected_guests &&
                        formik.touched.expected_guests && (
                          <div className="error">
                            {formik.errors.expected_guests}
                          </div>
                        )}
                    </li>
                  </ul>
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="agreement">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      onChange={(e) => {
                        formik.handleChange(e);
                        MyHandleChange(e);
                      }}
                    />
                    Я ознайомлений(а) з правилами роботи подієвого простору та
                    приймаю всі умови
                  </label>
                  {formik.errors.agreement && formik.touched.agreement && (
                    <div className="error">{formik.errors.agreement}</div>
                  )}
                </li>
                <br />
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
