import React from "react";
import Country from "../Country/Country";
import { useState, useEffect } from "react";
import "./countries.css";
const Countries = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => {
                setCountry(data);
            });
    }, []);
    return (
        <div className="countries">
            <h1 className="header text-center mb-5 mt-5">
                Travelling Around The World
            </h1>
            <div className="grid-countries ">
                {country.map((country) => (
                    <Country country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
