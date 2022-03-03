import React from "react";
import Navbar from "./Navbar";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import ReactPost from "./ReactPost";
import Authactions from "./Authactions";

export default function Body() {
  const isLoggedIn = true;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authactions" component={Authactions} />
          <Route
            exact
            path="/contact"
            render={() => <Contact number="01475454465" />}
          />

          <Route exact path="/blog">
            <Blog number="4" />
          </Route>

          <Route exact path="/post/:catagore/:topic" component={ReactPost} />

          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/authactions" /> : <Home />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
