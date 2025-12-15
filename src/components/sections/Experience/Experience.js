import React, { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapMarkerAlt,
  faClock,
  faTrophy,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      company: "Infosys Ltd",
      position: "Software Developer",
      period: "Oct 2021 - Jan 2024",
      location: "Hyderabad, India",
      jobType: "Full-time",
      duration: "2 years 4 months",
      summary:
        "Backend Java Developer skilled in scalable microservices, enterprise APIs, driving real‑time cloud automation and scalable deployments.",
      keyPoint:
        "Developed a modular scheduling engine in Java/Spring Boot for dynamic, configurable task execution",
      achievements: [
        "Designed and built a configurable Scheduling Automation Tool using Java + Spring Boot, enabling dynamic execution of backend jobs across environments with zero hard-coded logic",
        "Developed a modular rule-execution engine that processed task workflows in real time, improving code extensibility and reducing conditional complexity by ~35%",
      ],
      responsibilities: [
        "Improved Spring Boot microservice latency by ~40% through controller, service-layer, and SQL optimizations",
        "Built a configurable Scheduling Automation Tool enabling dynamic backend task execution",
        "Reduced code complexity by ~30% by modularizing monolithic logic into clean, reusable components",
        "Integrated OAuth 2.0 authentication and role-based access control (RBAC) to enhance API security and manage user permissions effectively",
        "Developed scalable REST APIs with efficient relational models supporting real-time automation flows"
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "JPA/Hibernate",
        "React",
        "Restful APIs",
        "Redux",
        "PostgreSQL",
        "Terraform",
        "AWS/Azure",
        "Junit",
      ],
    },
    {
      company: "University of Maryland, Baltimore County",
      position: "Teaching Assistant",
      period: "Sept 2024- Dec 2025",
      location: "Baltimore, MD, USA",
      jobType: "Full-time",
      duration: "1 year 4 months",
      summary:
        "Mentored students in Java, data structures, debugging, and backend development fundamentals through hands-on guidance and technical support",
      keyPoint: "Guided students in building clean, testable Java applications using OOP, SQL, and version-control best practices",
      achievements: ["Strengthened Java fundamentals", "Optimized SQL logic","Git version control"],
      responsibilities: [
        "Mentored students in Java programming, OOP design, SQL queries, and backend development concepts",
        "Assisted students in writing unit tests, integration tests, and API-level tests",
        "Given Insights on Git/GitHub workflows, including branching, pull requests, and collaborative version control"
      ],
      technologies: [
        "Java & OOP",
        "Spring Boot",
        "Data Structures",
        "SQL",
        "Git/GitHub",
        "JUnit",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="experience-container">
      <div className="section-title-container">
        <h2 className="section-title">Work Experience</h2>
      </div>
      <p className="section-subtitle">My professional journey</p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-date">{exp.period}</div>
            <LazyMotion features={domAnimation}>
              <motion.div
                className={`timeline-content ${
                  expandedId === index ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <div className="job-type-badge">
                    <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />{" "}
                    {exp.jobType}
                  </div>

                  <div className="company-wrapper">
                    <div className="company-badge">
                      <span>{exp.company}</span>
                    </div>
                    <div className="role-details">
                      <span className="location">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="fa-icon"
                        />{" "}
                        {exp.location}
                      </span>
                      <span className="duration">
                        <FontAwesomeIcon icon={faClock} className="fa-icon" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="summary-wrapper">
                    <p className="job-summary">{exp.summary}</p>
                    <div className="achievement-highlight">
                      <FontAwesomeIcon icon={faTrophy} className="fa-icon" />
                      <span>{exp.keyPoint}</span>
                    </div>

                    <div className="tech-pills">
                      {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="tech-pill">
                          +{exp.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="expand-indicator"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  <FontAwesomeIcon
                    icon={expandedId === index ? faChevronUp : faChevronDown}
                    className="fa-icon"
                  />
                </div>

                <div className="timeline-body">
                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <div className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div className="achievement-item" key={achIndex}>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="responsibilities">
                    <h4>Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-used">
                    <h4>Technologies Used</h4>
                    <div className="tech-grid">
                      {exp.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </LazyMotion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
