import React from "react";
import "./App.scss";


import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/loading";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Loading num={100} bar={90} />
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

// function Home() {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <h5 className="header_title">
//           You will fly <br />
//           away with US!
//         </h5>
//         <div className="header_img">
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
