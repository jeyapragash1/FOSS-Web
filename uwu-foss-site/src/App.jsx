// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />

      <main className="flex-grow">
        <Outlet /> {/* This is where the router will render the current page */}
      </main>

      <Footer />
    </div>
  );
}

export default App;