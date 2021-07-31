import React, {useState} from 'react';
import Error from './error';
import styled from "styled-components";

const WeatherFormStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1%;

    .wrapper-form {
        padding: 10px;
        background: rgba(31, 31, 31, 78%);
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 91%;
    }

    @media (min-width: 768px) {
        .wrapper-form {
            width: 20%;
        }
    }

    .wrapper-input {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .label-country,
    .label-city {
        font: var(--body2-bold);
        color: var(--primary);
    }

    .input-city,
    .input-country {
        border: none;
        border-radius: 3px;
        height: 20px;
        background: transparent;
        border-bottom: 2px solid var(--white);
        outline: none;
        color: white;
    }

    .input-city::placeholder,
    .input-country::placeholder {
        background: transparent;
        color: #7c7878;
    }

    .btn-submit {
        display: flex;
        justify-content: center;
        border: none;
        border-radius: 10px;
        width: 65%;
        padding: 5px;
        margin: 0 auto;
        margin-top: 5%;
        background: linear-gradient(90deg, #2e0bee 0%, #1bcedf 100%);
        color: var(--white);
        font: var(--button-button);
        outline: none;
    }
`;


const Form = ({search, setSavedSearch, setSavedQuery}) => {

    // ?5.
    const [error, setSavedError] = useState(false);

    // ?2. extract
    const { city, country } = search;

    // ?3. coloca los elementos en el state
    const handleChange = e => {
        // ?4. update state
        setSavedSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    // ?4.
    const handleSubmit = e => {
        e.preventDefault();

        // ?5. validation
        if(city.trim() === '' || country.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // ?6. send to main component
        setSavedQuery(true);
    }

    return (
        <WeatherFormStyled>
            <form onSubmit={handleSubmit} className="wrapper-form">
                {error ? <Error message="Ambos campos son obligatorios"/> : null}

                <div className="wrapper-input">
                    <label htmlFor="city" className="label-city" >Ciudad: </label>

                    <input 
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleChange}
                        className="input-city"
                        placeholder="Ingrese la ciudad"
                    />
                </div>

                <div className="wrapper-input">
                    <label htmlFor="country" className="label-country" >País: </label>

                    <input 
                        type="text"
                        name="country"
                        id="country"
                        value={country}
                        onChange={handleChange}
                        className="input-country"
                        placeholder="Ingrese el pais"
                    />
                </div>
                
                <div className="wrapper-input">
                    <input 
                        type="submit"
                        value="Buscar Clima"
                        className="btn-submit"
                    />
                </div>
            </form>
        </WeatherFormStyled>
    );
}

export default Form;