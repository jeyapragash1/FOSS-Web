// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // The only page we need

function App() {
  return (
    // THE FIX: The solid background class has been removed from this div.
    // The "digital-lines-background" from your index.css will now be visible.
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;