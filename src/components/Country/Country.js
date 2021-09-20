import React from "react";
import "./country.css";
const Country = (props) => {
    const { flag, name, capital, area, population } = props.country;
    console.log(props.country);

    return (
        <div className="country-details ">
            <img src={flag} alt="" className="img-fluid"></img>
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area} sqr-km</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;
