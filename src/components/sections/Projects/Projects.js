import React from "react";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  AnimatePresence,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Library Discovery Tool",
      description: [
        "Goal: To help users find the best available libraries for their projects by comparing features, performance, and community support.",
        "Solution: Developed a Spring Boot backend with RESTful APIs to fetch and compare library data from various sources. Implemented a React frontend for an intuitive user interface, allowing users to search and filter libraries based on their requirements. Utilized PostgreSQL with JPA/Hibernate for efficient data storage and retrieval. Containerized the application using Docker for easy deployment and scalability.",
      ],
      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JPA/Hibernate",
        "Docker"
      ],
      github: "https://github.com/harsha-reddy123/library-discovery-tool",
    },
    {
      id: 2,
      title: "Reddit Thread Summarizer",
      description:[
        "Goal: Build a system to quickly extract meaningful insights from long, unstructured Reddit discussion threads without manual reading.Reduce information overload while preserving key opinions, themes, and trends across large comment chains",
        "Solution: Developed an AI-powered summarization pipeline using Reddit APIs, NLP preprocessing, LDA topic modeling, and BERT/BART-based transformers.Automatically groups discussions and generates concise, coherent summaries highlighting dominant themes and sentiment"
      ],technologies: [
        "Python",
        "Reddit API",
        "NLP Preprocessing",
        "LDA Topic Modeling",
        "BART Summarizer",
        "REST-based processing pipeline",
      ],
      github: "https://github.com/harsha-reddy123/topic-mind",
      demo: null,
    },
    {
      id: 3,
      title: "Maryland Crime Rate Analysis & Economic Correlation",
      description:
        "Predicted crime rates with 85% accuracy utilizing causal inference on 10 years of socio-economic data, uncovering crime-driving factors. Trained ML models, including XGBoost and time series forecasting, to identify connections between education, unemployment, and crime. Designed a Streamlit dashboard with real-time visualizations, deploying ML pipelines on AWS for insights and decision-making.",
      technologies: [
        "Python",
        "XGBoost",
        "Time Series",
        "Streamlit",
        "AWS",
        "Data Science",
        "ML",
      ],
      github: "https://github.com/harsha-reddy123/SAFE-MD",
      demo: null,
    },
    {
      id: 4,
      title: "Expense Tracker",
      description:
        "The Expense Tracker is a FinTech web application designed to help users track income, expenses, and monthly spending patterns in real time. The backend is built with Spring Boot, JPA/Hibernate, and PostgreSQL to ensure secure data management and accurate financial calculations. A React-based frontend provides an intuitive interface for budgeting, categorization, and insights. The system enables users to make informed financial decisions through clear summaries and trends.",
      technologies: [
        "Spring Boot",
        "JPA/Hibernate",
        "PostgreSQL",
        "React",
        "AWS",
        "Typescript",
      ],
      github: null,
      demo: null,
    },
  ];

  return (
    <div className="projects-container">
      <div className="section-title-container">
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="section-subtitle">Some of my recent work</p>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <motion.div className="projects-grid" layout>
            {projects.map((project) => (
              <motion.div className="project-card" key={project.id} layout>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  {Array.isArray(project.description) ? (
                    project.description.map((desc, i) => {
                      const idx = desc.indexOf(":");
                      if (idx > -1) {
                        const key = desc.slice(0, idx).trim();
                        const rest = desc.slice(idx + 1).trim();
                        return (
                          <p key={i}>
                            <strong>{key}:</strong> {rest}
                          </p>
                        );
                      }
                      return <p key={i}>{desc}</p>;
                    })
                  ) : (
                    <p>{project.description}</p>
                  )}
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-badge">
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faLink} className="fa-icon" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default Projects;
