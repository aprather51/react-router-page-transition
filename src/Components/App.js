import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//components
import Home from "./Home";
import About from "./About";
import Article from "./Article";
import Contact from "./Contact";
import Page404 from "./Page404";

import "../scss/main.scss";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/article" activeClassName="active">
          Article
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
      {/*<Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
      </Switch> */}
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={200} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/article" component={Article} />
                <Route path="/contact" component={Contact} />
                <Route component={Page404} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  </BrowserRouter>
);

export default App;
