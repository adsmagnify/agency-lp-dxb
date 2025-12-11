import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import ThankYouPage from './pages/ThankYouPage';
import SessionPage from './pages/SessionPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/book-call" element={<BookingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;