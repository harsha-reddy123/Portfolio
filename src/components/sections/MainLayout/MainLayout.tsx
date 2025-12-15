import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./MainLayout.css";

const MainLayout = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(
    () => [
      "Software Engineer",
      "Full Stack Developer",
      "Java Developer",
      "Frontend Developer",
      "React Developer",
      "Backend Developer",
    ],
    []
  );
  const period = 2000; // How long to pause after typing

  const tick = useCallback(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];

    if (isDeleting) {
      // When deleting, remove a character and speed up typing
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(70);
    } else {
      // When typing, add a character
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(150);
    }

    // Handle the typing/deleting state changes
    if (!isDeleting && text === fullText) {
      // Just finished typing
      setTypingSpeed(period); // Wait after typing completes
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      // Just finished deleting
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [text, isDeleting, loopNum, titles]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [tick, typingSpeed]);

  return (
    <div className="MainLayout-container">
      <div className="MainLayout-bg-shape MainLayout-shape-1"></div>
      <div className="MainLayout-content">
        <div className="MainLayout-text">
          <span className="greeting">Hello, I'm</span>
          <h1>Harsha Palapala</h1>
          <h2>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            Detail-oriented Software Engineer with experience in full-stack
            development and AI/ML solutions. Proficient in building secure,
            scalable applications with React, Spring Boot, and Python. Passionate
            about solving complex problems through innovative technology.
          </p>
          <div className="MainLayout-btns">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="btn secondary-btn"
              download="Harsha_Palapala_Resume.pdf"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/harsha-reddy123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/harsha-palapala-24560a1b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:saiharshareddy123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <div className="MainLayout-image-container">
          <div className="blob-effect"></div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
