import React from "react";
import "./styleWeather.css";

const WeatherCard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  const imgsOfMood = {
    Sunny: "/images/sun.png",
    Mist: "images/mist.png",
    Clouds: "images/cloudy.png",
    Haze: "images/haze.png",
    Rain: "images/rain.png",
    Drizzle: "images/drizzle.png",
  };

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img src={imgsOfMood[weatherMood]}></img>
        </div>
        <div className="weather-date">
          <div className="weatherInfo">
            <div className="tempreture">
              <span>{temp}&deg;</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weatherMood}</div>
              <div className="place">{name}, india</div>
            </div>
          </div>
          <div className="date">{new Date().toDateString()}</div>
        </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {new Date(sunset * 1000).getHours()} <br></br>
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br></br>
                humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br></br>
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br></br>
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
