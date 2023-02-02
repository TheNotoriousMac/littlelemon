import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Footer from "./Footer";

const Booking = () => {
  const initializeTimes = () => {};

  const updateTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  // const [availableTimes, dispatch] = useReducer(
  //   updateTimes,
  //   null,
  //   initializeTimes
  // );

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <div className="container">
      <Nav />
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </div>
  );
};

export default Booking;
