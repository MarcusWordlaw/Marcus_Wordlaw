import React from 'react';
//Needs work

const Projects = () => (

  <section className="content-section" id="projects">
    <div className="container">
      <div className="content-section-heading text-center">
        <h3 className="text-secondary mb-0">Portfolio</h3>
        <h2 className="mb-5">What Projects have I Done?</h2>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <a className="portfolio-item" href="https://google.com/" target="blank">
            <span className="caption">
              <span className="caption-content">
                <h2>Coming Soon</h2>
                <p className="mb-0">Coming Soon</p>
              </span>
            </span>
            <img className="img-fluid" src="portfolio-1.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="www.google.com">
            <span className="caption">
              <span className="caption-content">
                <h2>Coming Soon</h2>
                <p className="mb-0">Coming Soon</p>
              </span>
            </span>
            <img className="img-fluid" src="portfolio-2.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="www.google.com">
            <span className="caption">
              <span className="caption-content">
                <h2>Coming Soon</h2>
                <p className="mb-0">Coming Soon</p>
              </span>
            </span>
            <img className="img-fluid" src="portfolio-3.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="www.google.com">
            <span className="caption">
              <span className="caption-content">
                <h2>Coming Soon</h2>
                <p className="mb-0">Coming Soon.</p>
              </span>
            </span>
            <img className="img-fluid" src="portfolio-1.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>

);
export default Projects;