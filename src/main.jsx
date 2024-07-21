import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
