// src/App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isEventPage = location.pathname.startsWith('/ideathon');

  return (
    <div className={isEventPage ? '' : 'digital-lines-background text-white'}>
      {!isEventPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isEventPage && <Footer />}
    </div>
  );
}

export default App;