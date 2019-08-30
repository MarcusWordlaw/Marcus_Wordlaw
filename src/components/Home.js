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

            {/* <SocialParagraph>
            Connect with me
            </SocialParagraph>
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            mb={15}
            >
            <Styled.SocialLink 
                href="https://www.linkedin.com/in/ivan-špoljarić-2206a184
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin page"
            >
                <span
                className="social-link_content"
                tabIndex="-1"
                >
                <Linkedin />
                </span>
            </Styled.SocialLink >
            <Styled.SocialLink  
                href="https://github.com/ispoljari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github page"
            >
                <span
                className="social-link_content"
                tabIndex="-1"
                >
                <Github />
                </span>
            </Styled.SocialLink >
            <Styled.SocialLink  
                href="https://medium.com/@ivanspoljaric22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium page"
            >
                <span
                className="social-link_content"
                tabIndex="-1"
                >
                <Medium />
                </span>
            </Styled.SocialLink >
            <Styled.SocialLink  
                href="mailto:ivan@ispoljaric.com?subject=Business proposal"
                aria-label="Send email to ivan@ispoljaric.com"
            >
                <span
                className="social-link_content"
                tabIndex="-1"
                >
                <Gmail />
                </span>
            </Styled.SocialLink >
            </Box> */}
    </section>
  </React.Fragment>  
);
export default Home;

