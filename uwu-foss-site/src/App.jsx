// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // The only page we need

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;