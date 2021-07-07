import React, { useRef, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Loading from "./components/loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import useWindowSize from './components/useWindowSize'

function App() {

  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 200) / 200;

    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <Router>
      <div className="App" ref={app}>
        <div ref={scrollContainer} className="container">
          {/* <Loading num={100} bar={90} /> */}
          <Navbar />
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;
