import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu";
import Logo from "./logo";
// import MenuIcon from "./menuIcon";

// import { logoAnimation } from "./Animations";

import { gsap } from "gsap";

const Header = ({ history }) => {

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
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });




  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });

  }, [history]);




  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
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
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);
