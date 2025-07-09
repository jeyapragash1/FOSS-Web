// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Import all the page components
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import JoinPage from './pages/JoinPage.jsx';
// --- Import the new pages ---
import BlogPage from './pages/BlogPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
// A placeholder for a single blog post page
import SinglePostPage from './pages/SinglePostPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The App component is our main layout (Navbar + Footer)
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'join', element: <JoinPage /> },
      // --- Add the new routes here ---
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <SinglePostPage /> }, // Dynamic route for single posts
      { path: 'gallery', element: <GalleryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);