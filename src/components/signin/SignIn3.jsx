import React from "react";
import "./SignInScreens.css";
import { Link } from "react-router-dom";

const SignIn3Screen = () => {
  return (
    <div className="explore-container">
      <div className="title-container">
        <h1 className="title">Compete and</h1>
        <h1 className="title">Connect with</h1>
        <h1 className="title">Friends</h1>
      </div>
      <button className="continue-button" style={{ marginBottom: "20px" }}>
        Sign In
      </button>
      <Link to="/registration">
        <button className="continue-button">Register</button>
      </Link>
    </div>
  );
};

export default SignIn3Screen;
