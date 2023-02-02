import React, { useState } from "react";

const BookingForm = ({ availableTimes }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);

  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        <label for="res-name">Name:</label>
        <input
          type="text"
          placeholder="Enter name..."
          id="res-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="res-phone">Phone Number:</label>
        <input
          type="text"
          placeholder="Enter phone number..."
          id="res-phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label for="res-time">Choose time</label>
        <select id="res-time">
          {availableTimes.map((t) => (
            <option>{t}</option>
          ))}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label for="occasion">Occasion</label>
        <select id="occasion">
          {occasions.map((occasion) => (
            <option>{occasion}</option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
