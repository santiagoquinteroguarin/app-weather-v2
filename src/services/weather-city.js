import React from 'react';
import styled from "styled-components";

const WeatherCityStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1%;

    .wrapper-weather {
        background: rgba(31, 31, 31, 78%);
        width: 98%;
    }

    @media (min-width: 768px) {
        .wrapper-weather {
            width: 21%;
        }
    }

    .wrapper-weather h2 {
        font: var(--body2-bold);
        text-align: center;
        color: var(--white);
        margin: 0;
        margin-top: 8px;
    }

    .wrapper-weather h2 span {
        color: var(--primary)
    }

    .wrapper-weather-city {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2px 20px;
        padding: 10px 12px;
    }

    .wrapper-weather-city p {
        color: var(--white);
        font: var(--body1-bold);
        margin: 0;
        text-align: center;
    }

    .wrapper-weather-city p span {
        color: var(--primary)
    }
`;

const WeatherCity = ({data}) => {
    const { name, main } = data;

    if(!name) return null;

    // grados kelvin
    const kelvin = 273.15;

    console.log(data.sys);
    const sunsetHour = new Date(data.sys.sunset * 1000).getHours()
    const sunriseHour = new Date(data.sys.sunrise * 1000).getHours()

    return (
        <WeatherCityStyled>
            <div className="wrapper-weather">
                <h2>El clima en <span>{name}</span> es: {parseFloat(main.temp - kelvin, 10).toFixed(0)}°</h2>

                <div className="wrapper-weather-city">
                    <p><span>Max:</span>  {parseFloat(main.temp_max - kelvin, 10).toFixed(0)}°</p>
                    <p><span>Min:</span>  {parseFloat(main.temp_min - kelvin, 10).toFixed(0)}°</p>
                    <p><span>Humedad:</span>  {parseFloat(main.humidity)} </p>
                    <p><span>Presión:</span>  {parseFloat(main.pressure)} </p>
                    <p><span>Morning:</span> {sunriseHour}AM</p>
                    <p><span>Noche:</span> {sunsetHour}PM</p>
                </div>
            </div>
        </WeatherCityStyled>
    );
}

export default WeatherCity;