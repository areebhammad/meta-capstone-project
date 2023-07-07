// import BookingForm from "./BookingForm";
// import { Link } from "react-router-dom";
// import { submitAPI } from "../api";
// // import { Route, Routes, Navigate } from "react-router-dom";

// export default function BookingPage() {
//   // const { availableTimes, setAvailableTimes } = props;

//   return (
//     <div>
//       {/* <BookingForm
//         availableTimes={availableTimes}
//         setAvailableTimes={setAvailableTimes}
//       /> */}
//       <Link to="/reservation/bookingform">Book Now</Link>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { submitAPI } from "../api";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { UserContext } from "../UserContext";

export default function Main() {
  const navigation = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { username } = useContext(UserContext);

  const fetchReservation = JSON.parse(localStorage.getItem(`${username}-reservation`)) || {}

  function submitForm(formData) {
    try {
      const success = submitAPI(formData);
      if (success) {
        const updatedBookings = [...bookings, formData];
        setBookings(updatedBookings);
        saveToLocalStorage(updatedBookings);
        // navigation("/confirmbooking");
        // setSubmitted(true);
        // setTimeout(() => navigation("/confirmbooking"), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  const saveToLocalStorage = (data) => {
    localStorage.setItem("bookings", JSON.stringify(data));
  };

  const retrieveFromLocalStorage = () => {
    const storedData = localStorage.getItem(`${username}-reservation`);
    return storedData ? JSON.parse(storedData) : {};
  };

  const storedBookings = retrieveFromLocalStorage();
  console.log(storedBookings);
  return (
    <div>
      {/* {storedBookings && <p>{storedBookings}</p>} */}
      <BookingForm submitForm={submitForm} />
      <h2 className="stored-heading">Stored Bookings</h2>
      <div className="storebooks">
        <p>{storedBookings.selectedName}</p>
        <p>{storedBookings.selectedDate}</p>
        <p>{storedBookings.selectedTime}</p>
        <p>{storedBookings.guests}</p>
        <p>{storedBookings.occasion}</p>
      </div>
      {/* <ul>
        {submitted &&
          storedBookings.map((booking, index) => (
            <li key={index} className="BF-main-center-stored">
              <p className="p-tag-col">
                <b className="p-tag-white">Name:</b> {booking.selectedName}
              </p>
              <p className="p-tag-col">
                <b className="p-tag-white">Date:</b> {booking.selectedDate}
              </p>
              <p className="p-tag-col">
                <b className="p-tag-white">Time:</b> {booking.selectedTime}
              </p>
              <p className="p-tag-col">
                <b className="p-tag-white">Guests:</b> {booking.guests}
              </p>
              <p className="p-tag-col">
                <b className="p-tag-white">Occasion:</b> {booking.occasion}
              </p>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
