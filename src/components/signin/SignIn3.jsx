import React from "react";
import "./SignInScreens.css";

const SignIn3Screen = () => {
  return (
    <div className="explore-container">
      <div className="title-container">
        <h1 className="title">Compete and</h1>
        <h1 className="title">Connect with</h1>
        <h1 className="title">Friends</h1>
      </div>
      <button className="continue-button" style={{ margin: "20 px" }}>
        Sign In
      </button>
      <button className="continue-button">Register</button>
    </div>
  );
};

export default SignIn3Screen;
