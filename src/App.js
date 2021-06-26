import React, { useState } from "react";
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
import image from "/src/components/webdevelopment4_img.jpg";
import Profile from "/src/components/Profile.js";
import { auth, provider } from "./firebase";
const App = () => {
  const [user, setUser] = useState([]);
  const Auth = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => sessionStorage.setItem("user", setUser(res.user)));
  };
  console.log(user);
  return (
    <>
      {!user.email ? (
        <div className="signIn">
          <div className="signIn_img">
            <img src={image} alt="#" />
          </div>
          <button onClick={Auth}>Sign In</button>
        </div>
      ) : (
        <div className="App">
          <Navbar mail={user.email} avatar={user.photoURL} />
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
            <Route path="/profile">
              <Profile
                mail={user.email}
                name={user.displayName}
                image={user.photoURL}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
