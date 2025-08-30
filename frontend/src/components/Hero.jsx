import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Hero = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  return (
    <section className="hero">
      <div className="content">
        <h1>Find Your Dream Job Today</h1>
        <h4>
          Connecting Talent with Opportunities Across the Nation for Every Skill
          Level
        </h4>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Job Title, Skills, or Company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="text"
            placeholder="City or Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="cta">
          <Button to="/jobs">Browse Jobs</Button>
          <Button to="/dashboard">Post a Job</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
