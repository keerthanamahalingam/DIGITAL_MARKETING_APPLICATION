import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import Email from "./pages/Email";
import Seo from "./pages/Seo";
import Social from "./pages/Social";
import Signup from "./pages/Signup";
import store from "./pages/Store";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Payment" component={Payment} />
          <Route path="/Email" component={Email}/>
          <Route path="/Seo" component={Seo}/>
          <Route path="/Social" component={Social}/>
          <Route path="/Signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}
