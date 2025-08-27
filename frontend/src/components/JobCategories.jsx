import React from "react";
import { Link } from "react-router-dom";

const JobCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Full-time Jobs",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Part-time Jobs",
      image:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Remote Jobs",
      image:
        "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Internships",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: "Freelance Jobs",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="categories">
      <h3>Job Categories</h3>
      <div className="grid">
        {categories.map((cat) => (
          <div className="card" key={cat.id}>
            <img src={cat.image} alt={cat.title} />
            <div className="info">
              <h4>{cat.title}</h4>
              <Link to="/jobs" className="btn">
                Browse Jobs
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
