import React, { useState, useEffect } from "react";
import "./styleWeather.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setsearchValue] = useState("durgapur");
  const [tempInfo, settempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=0e948b3ecd877b785634d8ebdd15621e`;
      //`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0e948b3ecd877b785634d8ebdd15621e`;
      const res = await fetch(url);
      //jii
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      console.log(data);

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo(); // to call first time when refreash
  }, []);

  return (
    <>
      <div className="page1">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="serach"
            className="serchTerm"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
          ></input>
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            search
          </button>
        </div>
        <WeatherCard tempInfo={tempInfo} className="weather-info"></WeatherCard>
      </div>
    </>
  );
};
export default Temp;
