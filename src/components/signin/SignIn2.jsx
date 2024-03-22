import React from "react";
import "./SignInScreens.css";
import { Link } from "react-router-dom";

const SignIn2Screen = () => {
  return (
    <div className="explore-container">
      <div className="title-container">
        <h1 className="title">Gather</h1>
        <h1 className="title">Points</h1>
      </div>
      <Link to="/signin3">
        <button className="continue-button">Continue →</button>
      </Link>
    </div>
  );
};

export default SignIn2Screen;
