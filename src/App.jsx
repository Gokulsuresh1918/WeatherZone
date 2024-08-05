import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/login";

function App() {
  const [user, setUser] = useState(null);
  console.log(import.meta.env.VITE_SERVER_URL,'app');

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${import.meta.env.VITE_SERVER_URL}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        console.log('client vanaii',data);
        setUser(data.user._json);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
