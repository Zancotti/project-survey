import React from "react";
import "./passengerInformation.css";

export const PassengerInformation = ({
  amountOfTravellers,
  onChangeFirstName,
  onChangeLastName,
  nameList,
}) => {
  const items = [];

  //A for loop in which we push the information into the empty array which we created above.
  for (let i = 1; i <= amountOfTravellers; i++) {
    items.push(
      <div className="form__passengers-information" key={i}>
        <h3 tabIndex="2">Passenger {i}</h3>

        <div className="form__names">
          <div className="form__name">
            <label htmlFor="firstName">
              <span>First Name</span>
            </label>
            <input
              autoFocus
              id="firstName"
              type="text"
              value={nameList[i - 1].firstName}
              onChange={(e) => onChangeFirstName(e.target.value, i)}
              required
            />
          </div>
          <div className="form__name">
            <label htmlFor="lastName">
              <span>Last Name</span>
            </label>
            <input
              id="lastName"
              value={nameList[i - 1].lastName}
              type="text"
              required
              onChange={(e) => onChangeLastName(e.target.value, i)}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h2 tabIndex="1">Passenger Information</h2>
      {/* items render everything when being called for here */}
      {items}
    </>
  );
};
