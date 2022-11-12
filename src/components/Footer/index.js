import React from "react";
import linkedIn from "../../Assets/LI-In-Bug.png";
import gitHub from "../../Assets/GitHub-Mark-32px.png";
import trailblazer from "../../Assets/trailhead.png";
import email from "../../Assets/email.png";

function Footer() {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container flex-row space-between justify-center align-center">
        <div className="social">
          <a href="mailto:regettaspearman@gmail.com">
            <img className="social" src={email} alt="Email Icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/regetta-harris/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="social" src={linkedIn} alt="LinkedIn Icon"></img>
          </a>
          <a href="https://github.com/RKH1988" rel="noreferrer" target="_blank">
            <img className="social" src={gitHub} alt="GitHub Icon"></img>
          </a>
          <a
            href="https://trailblazer.me/id/rkspearman"
            rel="noreferrer"
            target="blank"
          >
            <img
              className="social"
              src={trailblazer}
              alt="Trailblazer Icon"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
