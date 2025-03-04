import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { ModalProvider } from '/src/contexts/ModalContext';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <ModalProvider>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </ModalProvider>
  );
}
export default App;
