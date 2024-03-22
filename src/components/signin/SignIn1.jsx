import React from "react";
import "./SignInScreens.css";
import { Link } from "react-router-dom";

const SignIn1Screen = () => {
  return (
    <div className="explore-container">
      <div className="title-container">
        <h1 className="title">Explore</h1>
        <h1 className="title">U of T</h1>
        <h1 className="title">Campus</h1>
      </div>
      <Link to="/signin2">
        <button className="continue-button">Continue →</button>
      </Link>
    </div>
  );
};

export default SignIn1Screen;
