import React from "react";
import pdf from '../../Assets/resume.pdf';

function Resume() {
  return (
    <section> 
        <h4 className="my-5"> Download my <a href={pdf} download>Resume</a>
        </h4>
            
        <div className="container">
            <div className="card space-between">
                <div className="card-title"><h4>Front-End Proficiencies</h4></div>
                <ul className="two-column">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div className="card space-between">
            <div className="card-title"><h4>Back-End Proficiencies</h4></div>
                    <ul className="two-column">
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>MERN</li>
                        <li>mySQL</li>
                        <li>Express</li>
                        <li>Node JS</li>
                        <li>React</li>
                        <li>Insomnia</li>
                    </ul>
            </div>
        </div>
    </section>
    );
}

export default Resume;
