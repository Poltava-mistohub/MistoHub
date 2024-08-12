import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Contacts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <address>
      <ul>
        <li>
          <span>Телефон: </span>
          <Link
            to={isMobile ? `tel:+380981340622` : `https://t.me/MISTOHUB_admin`}
            target="blank"
            rel="noopener noreferrer"
          >
            +38 (098) 134-06-22
          </Link>
        </li>
        <li>
          <span>Email:</span>
          <Link
            to={`mailto:mistohub@gmail.com`}
            target="blank"
            rel="noopener noreferrer"
          >
            mistohub@gmail.com
          </Link>
        </li>
      </ul>
    </address>
  );
};

export default Contacts;
