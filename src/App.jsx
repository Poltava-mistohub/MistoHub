import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ModalProvider } from '/src/contexts/ModalContext';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const EventBookingPage = lazy(() => import('./pages/EventBookingPage/EventBookingPage'));

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<EventBookingPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ModalProvider>
  );
}
export default App;
