import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path ="/about" component={About} />
            <Route exact path = "/projects" component={Projects} />
            <Route exact path = "/contact" component={Contact} />
            <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
