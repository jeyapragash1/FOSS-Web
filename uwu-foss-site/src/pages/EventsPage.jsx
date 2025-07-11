// src/pages/EventsPage.jsx

import React from 'react';

const events = [
  { title: "Cloud Native Day '24", date: 'October 26, 2024', type: 'Upcoming' },
  { title: "Intro to Git & GitHub", date: 'November 15, 2024', type: 'Upcoming' },
  { title: "UWU CodeSprint '24", date: 'March 10, 2024', type: 'Past' },
  { title: "Linux Command Line Basics", date: 'February 05, 2024', type: 'Past' },
];

const EventsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-20 bg-gray-800 text-center"><h1 className="text-4xl font-bold">Events Archive</h1></header>
      <section className="container mx-auto px-6 py-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-teal-400 border-b-2 border-gray-700 pb-2">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.filter(e => e.type === 'Upcoming').map(event => (
                <div key={event.title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-teal-400 border-b-2 border-gray-700 pb-2">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.filter(e => e.type === 'Past').map(event => (
                <div key={event.title} className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-70">
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;