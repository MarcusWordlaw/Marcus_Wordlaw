import React from 'react';
import '../styles/style.scss';
//Needs Work

const Resume = () => {
    return (
        <div className="cv__container" id="resume">
          <h1 className="cv__title">Curriculum Vitae</h1>
          <h2>MARCUS WORDLAW | SOFTWARE ENGINEER | TECHNICAL WRITER </h2>
          <hr className="cv__divider"/>
          <div className="cv__section">
            <h1>Interaction</h1>
            <div className="cv__item">
              <h2>JavaScript</h2>
              <ul>
                <li>Node.js</li>
                <li>Babel</li>
                <li>ES6</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux	</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Java</h2>
              <ul>
                <li>Java Spring</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Ruby</h2>
              <ul>
                <li>Rails</li>
                <li>Active Record</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Styles</h2>
              <ul>
                <li>CSS3</li>
                <li>Sass</li>
                <li>SCSS</li>
                <li>Bootstrap 4</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Development</h2>
              <ul>
                <li>Git</li>
                <li>Heroku</li>
                <li>NPM</li>
                <li>Maven</li>
                <li>Yarn</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Database</h2>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
    
              </ul>
            </div>
            <div className="cv__item">
              <h2>CI/CD</h2>
              <ul>
                <li>Jenkins</li>
                <li>Travis</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Testing</h2>
              <ul>
                <li>Selenium</li>
                <li>R-Spec</li>
                <li>JBehave</li>
                <li>JUnit</li>
              </ul>
            </div>
          </div>
    
          <div className="cv__section">
            <h1>Design</h1>
            <div className="cv__item">
              <h2>3D</h2>
              <ul>
              <li>CATIA V5</li>
                <li>PTC CREO</li>
                <li>SolidWorks</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>ANALYSIS</h2>
              <ul>
              <li>ANSYS</li>
                <li>Matlab</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Docs</h2>
              <ul>
                <li>LaTex</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
          <hr className="cv__divider"/>
          <div className="cv__section work">
            <h1>Work</h1>
            <div className="cv__item">
              <ul>
                <li><strong>Blockchain Consultant</strong>
                    <br/>Gravity Consulting ~ 2018-Present</li>
                <li><strong>Software Engineer II</strong>
                    <br/>Northrop Grumman Corp ~ 2017-2019</li>
                <li><strong>System Design & Analysis Engineer</strong>
                    <br/>Boeing ~ 2015-2017</li>
                <li><strong>Design Consultant COOP</strong>
                    <br/>WSP Global ~ 2014-2015</li>
                <li><strong>Product Design Engineer COOP</strong>
                    <br/>DELL EMC~ 2012-2013</li>
                <li><strong>Field Engineer Intern</strong>
                    <br/>LG&E & KU Energy ~ 2013</li>
                <li><strong>Co-Owner</strong>
                    <br/>AM-Motorsports ~ 2007-2010</li>
                <li><strong>Technical Support</strong>
                    <br/>MCI Communications ~ 2004-2005</li>
              </ul>
            </div>
          </div>
          <div className="cv__section education">
            <h1>Education</h1>
            <div className="cv__item">
              <ul>
                <li><strong>Master of Science</strong>
                  <ul>
                    <li>Specialising in Computer Science</li>
                    <li>Currently Pursuing, 2018-2022</li>
                    <li>Johns Hopkins University</li>
                  </ul>
                </li>
                <li><strong>Bachelor of Science</strong>
                  <ul>
                  <li>Specialising in Mechanical Engineering</li>
                  <li>Minor Mathematics & Physics</li>
                    <li>Graduated, 2015</li>
                    <li>Virginia Commonwealth University</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="cv__section awards">
            <h1>Awards & Recognition</h1>
            <div className="cv__item">
              <ul>
                <li><strong>Performance Award</strong>
                  <ul>
                    <li>Boeing 777X Smoke Detection Implimentation & Testing</li>
                    <li>Boeing - Aerospace</li>
                  </ul>
                </li>
                <li><strong>President Formula SAE of VCU</strong>
                  <ul>
                    <li>Tasked to build a Miniature Formula 1 Style Race car from the ground up</li>
                    <li>Virginia Commonwealth University (2011-2015)</li>
                  </ul>
                </li>
                <li><strong>President Boeing Black Engineers Association</strong>
                  <ul>
                    <li>Boeing Affinity Group </li>
                    <li>Boeing  (2016)</li>
                  </ul>
                </li>
                <li><strong>Co-Creator of Engineering B.A.S.E Program</strong>
                  <ul>
                    <li>Boeing Accelerated Simulation in Engineering</li>
                    <li>Boeing (2015)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
    
        </div>
      );
    }
export default Resume;