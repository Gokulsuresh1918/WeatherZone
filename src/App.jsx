import React, { useEffect, useState } from "react";
import axios from 'axios';
import Temperature from "./componenets/Temperature";
import Highlights from "./componenets/Highlights";
import LoginPage from "./componenets/login";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/login').then(res => {
  //     console.log('client');
  //   });
  // }, []);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a8b9ef8f5c964c41971100418242007&q=${city}&aqi=no`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      {/* <LoginPage/> */}
      <div className="bg-slate-800 h-screen flex justify-center items-start">
        <div className="w-1/5 h-1/3 mt-40">
          {weatherData && (
            <Temperature
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime,
              }}
            />
          )}
        </div>
        <div className="w-1/3 h-1/3 mt-40 p-10 grid grid-cols-2 gap-6">
          <h1 className="text-slate-200 text-2xl col-span-2">
            Today's Highlights
          </h1>
          {weatherData && (
            <>
              <Highlights
                stats={{
                  title: "Wind Status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir,
                }}
              />
              <Highlights
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",
                }}
              />
              <Highlights
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles",
                }}
              />
              <Highlights
                stats={{
                  title: "Air Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </>
          )}
        </div>
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="gokul-dev1" data-version="v1">
          <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/gokul-dev1?trk=profile-badge">Gokul Suresh</a>
        </div>
      </div>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </>
  );
}

export default App;
