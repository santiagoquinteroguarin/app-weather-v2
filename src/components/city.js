import React from 'react';
import styled from "styled-components";

const CityItem = styled.div`
    p {
        margin: 6px 3px 6px 3px;
        text-align: center;
    }

    .name-city {
        color: var(--white);
        border-bottom: 1px solid var(--white);
    }

    .weather-city {
        color: var(--white);
        font: var(--body1-bold);
    }
`;

const City = ({city}) => {
    const { name, main, wind } = city
    const { humidity, pressure, temp, temp_max, temp_min} = main
    const { speed } = wind
    const kelvin = 273.15;

    return (
        <CityItem>
            <p className="name-city">{name}</p>
            <p className="weather-city">{parseFloat(temp - kelvin, 10).toFixed(0)}°</p>
            <p>{parseFloat(temp_max - kelvin, 10).toFixed(0)}°/{parseFloat(temp_min - kelvin, 10).toFixed(0)}°</p>
            <p>{humidity}%</p>
            <p>{pressure}</p>
            <p>{speed}km-h</p>
        </CityItem>
    );
}

export default City;