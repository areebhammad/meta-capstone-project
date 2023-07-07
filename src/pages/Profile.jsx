import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

function Profile() {
  const { username, signInStatus } = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
    order: {},
    reservation: [],
  });

  useEffect(() => {
    if (signInStatus) {
      const user = JSON.parse(localStorage.getItem(username)) || {};
      const userOrder =
        JSON.parse(localStorage.getItem(`${username}-order`)) || {};
      const userReservation =
        JSON.parse(localStorage.getItem(`${username}-reservation`)) || {};

      console.log(userReservation)

      setUserData({
        username: user.username,
        order: userOrder,
        reservation: userReservation,
      });
    } else {
      alert("Please sign in to view profile.");
    }
  }, [signInStatus, username]);

  return (
    <div className="container">
      <div className="row justify-content-center mx-auto">
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title text-center">Profile</h2>
              <hr />
              <h5>Username:</h5>
              <p>{userData.username}</p>
              <h5>Order:</h5>
              {userData.order &&
                Object.keys(userData.order).map((key, index) => (
                  <p
                    key={index}
                  >{`${key}: Name - ${userData.order[key].name}, Quantity - ${userData.order[key].quantity}, Price - ${userData.order[key].price}`}</p>
                ))}

              <h5>Reservation:</h5>
              {/* {userData.reservation.map((res, index) => (
                <p key={index}>{`Reservation ${index + 1}: Date: ${res.selectedDate
                  }, Time: ${res.selectedTime}, Number: ${res.selectedNumber
                  }, Occasion: ${res.selectedOccasion}`}</p>
              ))} */}
              {/* {userData.reservation &&
                Object.keys(userData.reservation).map((key, index) => (
                  <p key={index}>{` Name: ${userData.reservation.selectedName} Date: ${userData.reservation[key].selectedDate}`}</p>
                ))} */}
            </div>
            <p>{`Name: ${userData.reservation.selectedName}, Date: ${userData.reservation.selectedDate}, Time: ${userData.reservation.selectedTime}, Guests: ${userData.reservation.guests}, Ocassion: ${userData.reservation.occasion}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
