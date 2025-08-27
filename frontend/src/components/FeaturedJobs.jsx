import React from "react";
import { Link } from "react-router-dom";

const featured = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Acme Corp",
    location: "Colombo",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataWorks",
    location: "Kandy",
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "Marketify",
    location: "Galle",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs">
      <h3>Featured Jobs</h3>
      <div className="grid">
        {featured.map((job) => (
          <div className="card" key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p className="location">{job.location}</p>
            <Link to="/jobs" className="btn">
              View Job
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
