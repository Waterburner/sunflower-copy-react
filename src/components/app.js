import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./pages/footer";


import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
// import Directions from "./pages/directions";
// import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super (props);

  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/menu" component={Menu} />
              {/* <Route path="/directions" component={Directions} /> */}
              {/* <Route path="/contact" component={Contact} /> */}

              <Route component={NoMatch} />
            </Switch>

            <FooterContainer />
          </div>
        </Router>
        
      </div>
    );
  }
}
