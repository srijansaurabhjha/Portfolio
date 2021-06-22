import React from "react";
import "./Home.css";
import Typewritter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <p>Hi, I am Srijan</p>
        <Typewritter
          options={{
            loop: true,
            autoStart: true,
            wrapperClassName: "type",
            cursorClassName: "cursor",
            delay: 0.1
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome Buddy")
              .pauseFor(500)
              .deleteAll()
              .typeString("Srijan here :)")
              .pauseFor(800)
              .deleteAll()
              .typeString("I am a Full Stack Web Developer")
              .pauseFor(1000)
              .deleteAll(0.1)
              .typeString("Do you want a website for any buisness problem")
              .pauseFor(1500)
              .deleteAll(0.1)
              .typeString("You are at the right Place")
              .pauseFor(1000)
              .deleteAll(0.1)
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default Home;
