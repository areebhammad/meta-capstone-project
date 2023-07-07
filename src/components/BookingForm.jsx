import React, { useState, useEffect, useContext } from "react";
import { fetchAPI, submitAPI } from "../api";
import { UserContext } from '../UserContext'

function BookingForm({ submitForm }) {
  const [selectedName, setSelectedName] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [guests, setGuests] = useState("1");
  const { username } = useContext(UserContext);

  const BookingData = () => {
    try {
      const times = fetchAPI(selectedDate);
      setAvailableTimes(times);
      setSelectedTime(times[0]); // Set the default selected time
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    BookingData();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      selectedName,
      selectedDate,
      selectedTime,
      guests,
      occasion,
    };


    submitForm(formData);
    let userReservation = JSON.parse(localStorage.getItem(`${username}-reservation`)) || {};
    if (submitAPI(formData)) {
      console.log(userReservation)
      const newReservationObject = Object.assign(userReservation, formData)
      // userReservation.push({ id: id, name: selectedName, date: selectedDate, guests: guests, occasion: occasion });
      localStorage.setItem(`${username}-reservation`, JSON.stringify(newReservationObject))
    } else {
      alert("Reservation failed")
    }
    // try {
    //   const formData = { selectedDate, selectedTime, guests, occasion };
    //   submitAPI(formData);
    //   navigation("/reservation/bookingform/confirmedbooking");
    // } catch (event) {
    //   alert("error");
    // }
  };

  return (
    <div className="BF-main-center">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <input
            type="text"
            id="name"
            maxLength={12}
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            className="time-style"
            placeholder="Zack"
            required={true}
          />
        </div>
        <div>
          <div>
            <label htmlFor="date">Date:</label>
          </div>
          <input
            type="date"
            id="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
            className="date-style"
          />
        </div>
        <div>
          <div>
            <label htmlFor="time">Time:</label>
          </div>
          <select
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="time-style"
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>
            <label htmlFor="guests">Number of guests</label>
          </div>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="num-style"
          />
        </div>

        <div>
          <div>
            <label htmlFor="occasion">Occasion</label>
          </div>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="occasion-style"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
