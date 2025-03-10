import { useEffect, useRef } from 'react';
import { ErrorStyledBlock } from './BookEvent.styled';
import Icon from '/src/components/Icon/Icon';

const ErrorBlock = ({ handleCloseModal }) => {
  const blockRef = useRef(null);

  useEffect(() => {
    blockRef.current.focus();
  }, []);

  return (
    <div
      ref={blockRef}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      }}
    >
      <ErrorStyledBlock>
        <h2 className="joinTitle">
          На жаль, зараз сервіс <br />
          <span className="joinTitleAccent ">не відповідає &#58;&#40;</span>
        </h2>
        <p className="joinText">
          Будь ласка, скористайтеся поштою або зателефонуйте{' '}
          <Icon iconName="heart" />
        </p>
        <ul className="joinContacts">
          <li>
            <p>Телефон:</p>
            <a className="joinItemContact" href="tel:+380958282172">
              +38 (095) 828-21-72
            </a>
          </li>
          <li>
            <p>Email:</p>
            <a className="joinItemContact" href="mailto:mistohub@gmail.com">
              mistohub@gmail.com
            </a>
          </li>
        </ul>
      </ErrorStyledBlock>
    </div>
  );
};

export default ErrorBlock;
