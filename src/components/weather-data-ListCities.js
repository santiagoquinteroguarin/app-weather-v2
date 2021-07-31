import React from "react";
import styled from "styled-components";
import City from './city';

const ContainerCities = styled.div`
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font: var(--body2-regular);
    background: rgba(31, 31, 31, 78%);
    margin-top: 1%;
    color: #cbafaf;

    .container-list-cities {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media (min-width: 768px) {
        & {
            width: 50%;
        }

        .container-list-cities {
            justify-content: space-evenly;
        }
    }

    h2 {
        margin: 0;
        text-align: center;
        color: var(--white);
    }
`;

function WeatherDataCities(cities) {
    const { weatherCities } = cities;
    let counter = 1
    return (
            <ContainerCities>
                <h2>El clima para las ciudades más cercanas a tu posición</h2>

                <div className="container-list-cities">
                    {weatherCities.map(function(city) {
                        if(counter === 1) {
                            {/* omitir la primera ciudad ya que es donde nos encontramos */}
                            counter += 1
                        } else {
                            return <City
                                key={city.id}
                                city={city}
                            />
                        }
                    })}
                </div>
            </ContainerCities>
    );
}

export default WeatherDataCities;