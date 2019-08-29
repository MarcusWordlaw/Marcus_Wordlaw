import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="navbar-body" >
                <ul>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={360}
                > Home </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={360}
                >Projects </Link>
                <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={360}
                > Articles </Link>
                <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={360}
                > Resume </Link> 
                </ul>
            </div>
        );
    }
}
export default Navbar;