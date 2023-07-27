import React from 'react'
import Project from './Project'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/Portfolio.css"

// Portfolio component
function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
              {
                title: "Weather Dashboard",
                description: "5 Day Forecast Weather Dashboard",
                imgSrc: '',
                deployedLink:
                  "https://nreece6.github.io/weather-dashboard/",
                githubLink:
                  "https://github.com/nreece6/weather-dashboard",
              },
              {
                title: "Web Quiz",
                description: "Web Quiz Trivia Game With High Scores",
                imgSrc: '',
                deployedLink:
                  "https://web-apis-code-quiz-3zugu2bwh-nreece6.vercel.app/",
                githubLink:
                  "https://github.com/nreece6/web-apis-code-quiz",
              },
              {
                title: "Work Day Scheduler",
                description: "Calendar Organizer That Tracks Current Time",
                imgSrc: '',
                deployedLink:
                  "https://nreece6.github.io/work-day-scheduler/",
                githubLink:
                  "https://github.com/nreece6/work-day-scheduler",
              },
              {
                title: "Express Note Taker",
                description: "Lightweight Note Taking Application",
                imgSrc: '',
                deployedLink:
                  "https://afternoon-fortress-88111-b283180edf86.herokuapp.com/",
                githubLink:
                  "https://github.com/nreece6/expressjs-note-taker",
              },
              {
                title: "Job Hive",
                description: "Full Stack Job Board Application",
                imgSrc: '',
                deployedLink:
                  "https://protected-refuge-18602-b5474f6525e3.herokuapp.com/",
                githubLink:
                  "https://github.com/nreece6/project-2-job-board",
              },
              {
                title: "Beer and a Show",
                description: "Web Application That Finds Events and Breweries in Selected City",
                imgSrc: '',
                deployedLink:
                  "https://jennastrom.github.io/Beer-and-a-show/",
                githubLink:
                  "https://github.com/JennaStrom/Beer-and-a-show",
              },
            ].map((project, index) => (
              // Div container for each project
              <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                {/* <h2>{project.title}</h2> */}
                <Project
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Export Portfolio
  export default Portfolio;