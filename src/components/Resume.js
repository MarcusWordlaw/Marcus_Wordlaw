import React from 'react';
import '../styles/style.scss';

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
                <li>Babel</li>
                <li>ES6</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Redux	</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Creative Code</h2>
              <ul>
                <li>Canvas API</li>
                <li>p5.js</li>
                <li>Three.js</li>
                <li>Web Audio API</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>PHP</h2>
              <ul>
                <li>SilverStripe</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Styles</h2>
              <ul>
                <li>CSS3</li>
                <li>Sass</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Development</h2>
              <ul>
                <li>Git</li>
                <li>Heroku</li>
                <li>NPM</li>
                <li>Firebase</li>
                <li>Yarn</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Misc</h2>
              <ul>
                <li>Arduino</li>
                <li>Bash</li>
                <li>Pure Data</li>
                <li>Unity3D</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Learning</h2>
              <ul>
                <li>Backbone.js</li>
                <li>GLSL</li>
                <li>Node.js</li>
                <li>RequireJS</li>
              </ul>
            </div>
          </div>
    
          <div className="cv__section">
            <h1>Design</h1>
            <div className="cv__item">
              <h2>Graphic</h2>
              <ul>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Photoshop</li>
                <li>Sketch</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>3D</h2>
              <ul>
                <li>Agisoft PhotoScan</li>
                <li>Cinema 4D</li>
                <li>MeshLab</li>
                <li>Substance Designer</li>
                <li>ZBrush</li>
              </ul>
            </div>
            <div className="cv__item">
              <h2>Motion</h2>
              <ul>
                <li>After Effects</li>
                <li>Premiere</li>
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
                    <br/>WSP ~ 2014-2015</li>
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
                <li><strong>VicLink Award</strong>
                  <ul>
                    <li>for the project with the most commercial potential</li>
                    <li>Victoria University of Wellington (2016)</li>
                  </ul>
                </li>
                <li><strong>Master of Design Innovation Completion Scholarship</strong>
                  <ul>
                    <li>Funded by Ministry of Business, Innovation and Employment</li>
                    <li>Victoria University of Wellington (2015)</li>
                  </ul>
                </li>
                <li><strong>VUW Summer Scholarship</strong>
                  <ul>
                    <li>National Library of New Zealand collaboration</li>
                    <li>Victoria University of Wellington (2014)</li>
                  </ul>
                </li>
                <li><strong>Creative Excellence Award for Top Overall Student</strong>
                  <ul>
                    <li>Otago Polytechnic (2013)</li>
                  </ul>
                </li>
                <li><strong>Design Achievement Award</strong>
                  <ul>
                    <li>Otago Polytechnic (2011)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
    
        </div>
      );
    }
export default Resume;