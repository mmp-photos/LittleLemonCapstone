import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './pages/Order';
import Login from './pages/Login';
import Main from './pages/Main';
import About from './pages/About';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

const Routing = ({ updateTimes, availableTimes }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Order />} />
      <Route
        path="/booking"
        element={<BookingPage updateTimes={updateTimes} availableTimes={availableTimes} />}
      />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Routing;
