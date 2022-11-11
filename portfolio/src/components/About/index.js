import React from "react";
import headshot from "../../Assets/headshot.jpg";

function About() {
  return (
    <section className="my-5 text-dark ">
      <h1 id="about">About Me</h1>
      <div className="container space-between justify-center align-center">
        <div className="basis-25">
          <img src={headshot} style={{ width: "100%" }} alt="cover" />
          <h2>RK Harris</h2>
        </div>
        <div className="basis-75">
          <p>
            As a recent graduate of the November 2022 UNC Coding Bootcamp
            Cohort, I have increased my skillset to encompass full-stack
            web-development. My background is in accounting and fundraising. My
            passion is utilizing my talents to help others, for I believe that
            fulfillment comes when we are selfless.
          </p>
          <p>
            I attended UNC - Greensboro for a BS and MS in Accounting. I
            received an MBA from ECU and a certificate in Training and
            Development from Northcentral University. In addition to a robust
            education, I have 10 years of fundraising experience - from Annual
            Giving to Database Management. Having worked with Ellucian Banner, eTapestry, Raiser's
            Edge, and Salesforce (Causeview, QGiv, OneCause, NPSP), I have
            developed a wide array of knowledge surrounding best practices in a
            philanthropic database and the web tools that make a philanthropy
            team successful.
          </p>
          <p>
            I desire to remain in the non-profit space with goals of eventually
            achieving Database Administrator status.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
