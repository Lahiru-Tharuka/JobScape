import React from "react";
import { Link } from "react-router-dom";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      image:
        "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=60",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Cybersecurity",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c44367a?auto=format&fit=crop&w=800&q=60",
      description:
        "Protect systems and data with cutting-edge cybersecurity services and strategies.",
    },
    {
      id: 4,
      service: "Data Science",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 5,
      service: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
      description:
        "AI solutions and machine learning models that power the next generation of intelligent applications.",
    },
    {
      id: 6,
      service: "Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1581093588401-22b9b40a4958?auto=format&fit=crop&w=800&q=60",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 7,
      service: "Mobile App Development",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
    {
      id: 8,
      service: "Game Development",
      image:
        "https://images.unsplash.com/photo-1605902711865-119c03e7e0d2?auto=format&fit=crop&w=800&q=60",
      description:
        "Bring immersive gaming experiences to life with our game development expertise.",
    },
  ];

  return (
    <section className="services">
      <h3>Top Niches</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.service} />
              <div className="info">
                <h4>{element.service}</h4>
                <p>{element.description}</p>
                <Link to="/jobs" className="btn">
                  Browse Jobs
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
