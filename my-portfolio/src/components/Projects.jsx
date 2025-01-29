import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project2Image from '../assets/Project2.png';
import project1Image from '../assets/Project1.png';
import project3Image from '../assets/Project3.png';
import project4Image from '../assets/Project4.png';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, technologies, repoUrl, image }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">
        <FontAwesomeIcon icon={faGithub} /> View on GitHub
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      repoUrl: "https://github.com/kylehe77/PersonalPortfolio",
      image: project1Image
    },
    {
      title: "AI Magic Studio",
      description: "Empowering creativity through AI-driven tools, make content creator's life easier.",
      technologies: ["React", "Typescript", "JavaScript", "Node.js","Express.js"],
      repoUrl: "https://github.com/kylehe77/AI_Magic_Studio",
      image: project4Image
    },
    {
      title: "Handwritten-Recognition Application",
      description: "This ia a project required us to design and implement a application that recognizes handwritten digits and English letters. This application used EMNIST dataset to train the model and predict the handwritten digit based on the model.",
      technologies: ["Python", "PyQt5", "Pytorch", "NumPy","OpenCV", "PIL","Git"],
      repoUrl: "https://github.com/kylehe77/Handwritten-Recognition",
      image: project2Image
    },
    {
      title: "Android Mobile Application",
      description: "This project was built by using Java and Android Studio. This application was designed to be a vechiles display system which is able to show information about vehicles.",
      technologies: ["Java", "Android Studio", "UI/UX Design"],
      repoUrl: "https://github.com/kylehe77/Android-mobile-app",
      image: project3Image
    },
    
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;