import React from "react";
import styled from "styled-components";
import date from "./date";

const CurrentDateStyled = styled.div`
  display: flex;
  width: 17rem;
  height: 5.62rem;
  margin: auto;
  position: absolute;
  bottom: 6rem;
  background: linear-gradient(90deg, #536976 0%, #292e49 100%);
  color: var(--white);
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  gap: 1rem;
  border-radius: 0.5rem;
  left: calc(50% - (17rem / 2));
  * {
    margin: 0;
  }
  .current-date-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .degreesCelsius {
    font: 400 normal 50px/43px "Nunito", sans-serif;
    display: flex;
    align-items: center;
  }
  .day {
    font: var(--caption-caption);
    margin-block-end: 0.75rem;
  }
  .country {
    font: var(--caption-caption);
    display: flex;
    gap: 0.25rem;
  }
  .country img {
    vertical-align: middle;
    object-fit: cover;
  }
`;

function CurrentDate({ weather, setHidden }) {
  const currentDate = date();
  const degreesCelsius = Math.floor(weather.main.temp - 273.15);
  const location = `${weather.sys.country} ${weather.name}`;
  const city = document.getElementById("current-date");
  setHidden(city);

  console.log(weather.name)
  return (
    <CurrentDateStyled id="current-date" className="animate__backInUp">
      <div className="degreesCelsius">{degreesCelsius}°</div>
      <div className="current-date-right">
        <p className="day">{currentDate}</p>
        <div className="country">
          <img src={`${process.env.PUBLIC_URL}/icons/lugar.svg`} alt="point" />
          <p>{location}</p>
        </div>
      </div>
    </CurrentDateStyled>
  );
}

export default CurrentDate;
