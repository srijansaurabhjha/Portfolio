import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar.js";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Blog1 from "./components/articles/Blog1.js";
import Blog2 from "./components/articles/Blog2.js";
import Blog3 from "./components/articles/Blog3.js";
import Blog4 from "./components/articles/Blog4.js";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog1">
          <Blog1 />
        </Route>
        <Route path="/blog2">
          <Blog2 />
        </Route>
        <Route path="/blog3">
          <Blog3 />
        </Route>
        <Route path="/blog4">
          <Blog4 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
