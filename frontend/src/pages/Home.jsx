import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUpload,
  FaBriefcase,
  FaBolt,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".fade-in, .step")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job Today</h1>
          <p className="hero-subtitle">
            Connecting talent with opportunities across the nation for every
            skill level and experience
          </p>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Job title, keywords, or company"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input
              type="text"
              className="search-input"
              placeholder="City, state, or remote"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <FaSearch /> Search Jobs
            </button>
          </form>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary">
              <FaUpload /> Upload Resume
            </a>
            <a href="#" className="btn btn-outline">
              <FaBriefcase /> For Employers
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose JobScape</h2>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <FaBolt />
            </div>
            <h3 className="feature-title">Quick Search</h3>
            <p className="feature-description">
              Find relevant job opportunities in seconds with our advanced
              search algorithm.
            </p>
            <a href="#" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div className="feature-card fade-in delay-1">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3 className="feature-title">Career Growth</h3>
            <p className="feature-description">
              Discover opportunities that match your career aspirations and
              growth potential.
            </p>
            <a href="#" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div className="feature-card fade-in delay-2">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3 className="feature-title">Trusted Platform</h3>
            <p className="feature-description">
              Join thousands who have found their perfect job through our secure
              platform.
            </p>
            <a href="#" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Create Your Profile</h3>
              <p className="step-description">
                Sign up and build your professional profile with your skills,
                experience, and career preferences.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Find Matching Jobs</h3>
              <p className="step-description">
                Our AI-powered system will match you with relevant job
                opportunities based on your profile.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Apply With Ease</h3>
              <p className="step-description">
                Submit applications with just one click and track your progress
                in your personal dashboard.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">Get Hired</h3>
              <p className="step-description">
                Connect with employers and land your dream job faster than ever
                before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
