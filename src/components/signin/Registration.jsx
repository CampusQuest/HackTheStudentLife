import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    yearOfStudy: "",
    program: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelectChange = (e) => {
    const options = e.target.options;
    const values = [];
    for (let i = 0, len = options.length; i < len; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setFormData({ ...formData, [e.target.name]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the formData here or pass it to a parent component
    console.log(formData);
  };

  return (
    <div className="registration-form-container">
      <h2>Tell us about yourself</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <select
          name="yearOfStudy"
          value={formData.yearOfStudy}
          onChange={handleChange}
          className="dropdown"
        >
          <option value="" disabled>
            Select your year of study
          </option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5+">5th Year and above</option>
        </select>

        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="dropdown"
        >
          <option value="" disabled>
            Program
          </option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Statistics">Statistics</option>
          <option value="Biology">Biology</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="hobbies"
          value={formData.hobbies}
          onChange={handleMultiSelectChange}
          className="dropdown"
          multiple
        >
          <option value="Chess">Chess</option>
          <option value="Debate">Debate</option>
          <option value="Other">Other</option>
        </select>
        <Link to="/dashboard">
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
