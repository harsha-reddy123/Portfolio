import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "HTML",
        "CSS",
        "PHP",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Junit & Mockito",
        "React",
        "Node.js",
        "Express.js",
        "Flask",
      ],
    },
    {
      category: "Libraries",
      items: [
        "Hibernate/JPA",
        "JDBC",
        "React.js",
        "Redux",
        "GraphQL",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "Socket.io",
        "JUnit",
        "Jest",
      ],
    },
    {
      category: "Databases",
      items: ["SQL", "NoSQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git/GitHub",
        "Linux",
        "Docker",
        "Kubernetes",
        "AWS/Azure",
        "JIRA",
        "VSCode",
        "Eclipse",
        "IntelliJ IDEA",
        "Postman",
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="section-title-container">
        <h2 className="section-title">My Skills</h2>
      </div>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <LazyMotion features={domAnimation}>
        <motion.div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </LazyMotion>
    </div>
  );
};

export default Skills;
