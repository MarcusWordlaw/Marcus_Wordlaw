 import React from 'react';
import { Box } from '@smooth-ui/core-sc';
// import {Row, Col } from 'react-bootstrap';
import TextLoop from 'react-text-loop';


const Home = () => (
  <React.Fragment> 
      <section className="body-home" id="home">
        <div>
            <Box className="box-content">
            <section>
                Hello World.&nbsp;
                <br className="break-large"/>
                My name is
                Marcus Wordlaw.&nbsp;
                <br className="break-large"/>
                I'm&nbsp;
                <br className="break-under-xs"/>
                <TextLoop
                interval={2500}
                springConfig={{ stiffness: 30, damping: 10 }}
                mask
                >
                <span>
                    a Software Engineer
                </span>
                <span>
                    a Full Stack Web Developer
                </span>
                <span>
                    a Blockchain Consultant
                </span>
                <span>
                    a Mechanical Engineer
                </span>
                <span>
                    a Technical Writer
                </span>
                <span>
                    a SciFi Fan
                </span>
                <span>
                    a Tech Geek
                </span>
                <span>
                    a Travel Addict
                </span>
                <span>
                    a Book Worm
                </span>
                </TextLoop>&nbsp;
                <br className="break-small"/>
                from the USA.&nbsp;
            </section>
            </Box>
        </div>
        <div className="connect">Connect with me</div>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/marcuswordlaw/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/MarcusWordlaw" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@TetraGravity" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-medium" aria-hidden="true" />
          </a>
        </div>
    </section>

    

  </React.Fragment>  
);
export default Home;

