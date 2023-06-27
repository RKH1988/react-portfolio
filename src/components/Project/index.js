import React from "react";
import gitHub from "../../Assets/GitHub-Mark-32px.png";
import proj1 from "../../Assets/event-finder.png";
import proj2 from "../../Assets/D3-lawncare.png";
import proj3 from "../../Assets/nim-portal.png";
import proj4 from "../../Assets/run-buddy.jpg";
import proj5 from "../../Assets/work-day-scheduler.png";
import proj6 from "../../Assets/dash-of-weather.png";

function Project() {
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="projects">
          <div className="flex-row">
            <div className="container relative">
              <a
                href="https://jessicam04.github.io/wheres-the-band/#"
                rel="noreferrer"
                target="_blank"
                title="Event Finder"
              >
                <img
                  src={proj1}
                  alt="crowd at concert with events and directions to events"
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">Event Finder</h5>
                <a
                  href="https://github.com/JessicaM04/wheres-the-band"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">
                  SeatGeek API/Google Directions API
                </h6>
              </div>
            </div>
          </div>
            <div className="container relative">
              <a
                href="https://d-cubed.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                title="D<sup>3</sup> Lawn Care"
              >
                <img
                  src={proj2}
                  alt="homepage of the webpage for D cubed Lawn care showing login link"
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">
                  D<sup>3</sup> Lawn Care
                </h5>
                <a
                  href="https://github.com/JessicaM04/wheres-the-band"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">MVC Full Stack/Handlebars</h6>
              </div>
            </div>
            <div className="flex-row">
            <div className="container relative">
              <a
                href="https://nim-portal.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                title="Event Finder"
              >
                <img
                  src={proj3}
                  alt=""
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">NIM Portal</h5>
                <a
                  href="https://github.com/RKH1988/nim-portal"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">
                  MERN
                </h6>
              </div>
            </div>
          </div>
            <div className="container relative">
              <a
                href="https://rkh1988/github.io/run-buddy/"
                rel="noreferrer"
                target="_blank"
                title="Run Buddy, Inc."
              >
                <img
                  src={proj4}
                  alt=""
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">
                  Run Buddy
                </h5>
                <a
                  href="https://github.com/RKH1988/run-buddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">CSS, HTML</h6>
              </div>
            </div>
            <div className="flex-row">
            <div className="container relative">
              <a
                href="https://rkh1988.github.io/work-day-scheduler/"
                rel="noreferrer"
                target="_blank"
                title="Work Day Scheduler"
              >
                <img
                  src={proj5}
                  alt=""
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">Work Day Scheduler</h5>
                <a
                  href="https://github.com/RKH1988/work-day-scheduler"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">
                  JavaScript, Bootstrap, Moment
                </h6>
              </div>
            </div>
          </div>
            <div className="container relative">
              <a
                href="https://rkh1988.github.io/dash-of-weather/"
                rel="noreferrer"
                target="_blank"
                title="Dash of Weather"
              >
                <img
                  src={proj6}
                  alt=""
                ></img>
              </a>
              <div className="project-details">
                <h5 className="project-name">
                  Dash of Weather
                </h5>
                <a
                  href="https://github.com/RKH1988/dash-of-weather"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="gitHub" src={gitHub} alt=""></img>
                </a>
                <h6 className="project-skill">Bootstrap, OpenWeather API</h6>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Project;
