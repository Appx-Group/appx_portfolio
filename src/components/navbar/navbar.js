import React, { useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
// import Menu from "./Menu";
import Logo from "./logo";
import { gsap } from "gsap";

const Navbar = ({ history }) => {

  let logo = useRef(null)

  useEffect(() => {
    // logoAnimation(logo)

    history.listen(() => {
      gsap.from(logo, 0.8, {
        duration: 5,
        x: -20,
        opacity: 0,
        ease: "power3.inOut"
      })
    }, [history])

  })


  return (
    <header>
      <div className="container">
        <div className="wrapper-header">
          <div className="inner-header">
            <div
              className="logo"
              ref={el => (logo = el)}
            >
              <Link to="/">
                <div className="logo">
                  <Logo />
                </div>
              </Link>
            </div>
            <div className="menu">
              <Link to="/about">
                <div className="menu__link">
                  <div className="link__name" data-text="About">
                    About
                  </div>
                </div>
              </Link>
              <Link to="/projects">
                <div className="menu__link">
                  <div className="link__name" data-text="Projects">
                    Projects
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Menu state={state} /> */}
    </header>
  );
};

export default withRouter(Navbar);
