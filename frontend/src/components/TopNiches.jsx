import React from "react";
import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      icon: <FaCode />,
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      icon: <FaGlobe />,
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      icon: <FaDatabase />,
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      icon: <FaCloud />,
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      icon: <FaCogs />,
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      icon: <FaMobileAlt />,
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  return (
    <section className="services">
      <h3>Top Niches</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <span className="icon">{element.icon}</span>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
