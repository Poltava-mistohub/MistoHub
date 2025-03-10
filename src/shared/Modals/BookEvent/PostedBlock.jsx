import { useEffect, useRef } from 'react';

import { PostedStyledBlock } from './BookEvent.styled';

const PostedBlock = ({ handleCloseModal }) => {
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
      <PostedStyledBlock>
        <h2 className="joinTitle">
          <span className="joinTitleAccent">Дякуємо! </span><br />
          Ваш запит успішно
          <span className="joinTitleAccent"> відправлений!</span>
        </h2>
        <p className="joinText">
          Незабаром звʼяжемось з вами для підтвердження.
        </p>
        <button
          className="joinSuccessBtn"
          type="button"
          title="На сторінку"
          onClick={handleCloseModal}
        >
          На сторінку
        </button>
      </PostedStyledBlock>
    </div>
  );
};

export default PostedBlock;
