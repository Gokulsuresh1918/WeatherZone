import React, { useEffect, useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import Highlights from "./Highlights";
import Navbar from "../components/NavBar"; // Ensure the correct path and casing

function Home({ user }) {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a8b9ef8f5c964c41971100418242007&q=${city}&aqi=no`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get    data");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  const handleSignOut = async () => {
    try {
      await axios.get("http://localhost:3001/auth/logout");
      window.reload();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-slate-800 h-screen flex flex-col">
      <Navbar onSignOut={handleSignOut} /> {/* Add Navbar component */}
      <div className="flex-grow flex justify-center items-start mt-10">
        <div className="w-2/5 h-1/3">
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
        <div className="w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
          <h1 className="text-orange-400 text-4xl col-span-2">
            Today's Weather ⛈️
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
      </div>
    </div>
  );
}

export default Home;
