import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AboutUs from './components/AboutUs';
import Cards from './components/Card';
import BookingForm from './components/BookingForm';
import InstagramSection from './components/InstagramSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutUs />
    <Cards/>
    <BookingForm/>
    <InstagramSection/>
  </React.StrictMode>
);


