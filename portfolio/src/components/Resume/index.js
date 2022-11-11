import React from "react";
import pdf from '../../Assets/resume.pdf';

function Resume() {
  return (
    <section> test
        <div>
            <a href={pdf} rel="noreferrer" target="_blank">Download My Resume</a>
            </div>
    </section>
    );
}

export default Resume;
