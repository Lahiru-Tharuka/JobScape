import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div className="cta">
          <Link to="/jobs" className="btn">
            Browse Jobs
          </Link>
          <Link to="/dashboard" className="outline_btn">
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
