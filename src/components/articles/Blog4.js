import React from "react";
import "./Blog1.css";
import "./Blog4.css";
import { NavLink } from "react-router-dom";
import image1 from "./pexels-lisa-2349209.jpg";
import image2 from "./pexels-markus-winkler-4057663.jpg";
import image3 from "./pexels-picography-4458.jpg";
import postImage from "../webdevelopment4_img.jpg";
const Blog4 = () => {
  return (
    <div className="diffblog">
      <div className="diffblog_postImg">
        <img src={postImage} alt="#" />
      </div>
      <div className="diffblog_heading">
        <h1> Improve Coding Speed</h1>
      </div>
      <div className="diffblog_content">
        <p>
          A lot of people are asking whether coding speed matters in coding
          interviews. The short answer is – yes, it’s extremely important
        </p>
        <p>
          Over the past, Gainlo interviewers have seen so many candidates who
          came up with the right solution quickly but failed to complete the
          code in the end. This phenomenon has become more and more common and
          that’s why we decided to talk about it this week.
        </p>
        <p>
          This week, Jared will share his interview preparation experience,
          especially on how he improved his coding speed in a week. He used to
          be a slow programmer but has successfully got offers from Google,
          Facebook, Amazon and various other companies later on. We are glad to
          have the chance to interview him and we’ve summarized all the tips in
          this post.
        </p>
        <p>
          Normally, candidates will be asked one to two questions per interview
          (~45min) and most likely coding is required. In other words, we only
          have less than 20min per question (removing “trash time” in the
          beginning and end), which is more challenging than it seems to be
        </p>
        <p>
          In addition, a lot of people don’t even pay attention to coding speed
          like I used to be. They don’t have the mindset that finishing the code
          in a short period of time is equally important as solving the problem
          itself. This is because if we don’t have enough time to code in an
          interview, it’s as bad as we fail to solve the problem.
        </p>
        <div className="Large">Coding speed != typing speed</div>
        <p>
          Some people think that in order to speed up coding, we need to improve
          typing speed or writing speed on a whiteboard. But in reality, typing
          speed is really not important at all.
        </p>
        <p>I found a couple of reasons that I had been slow in coding:</p>
        <p>
          <span>1.</span> Sometimes I was not clear enough in my mind when
          coding. In other words, I didn’t even have a concrete solution before
          rushing to code
        </p>
        <p>
          <span>2.</span>I was just slow in coding. For example, it could take
          me a long while to implement a recursion since I’ve got to go back and
          keep “refactoring” the code.
        </p>
        <p>
          <span>3.</span>I was right too fast on a whiteboard and I just wanted
          to be fast. The result was that my code screwed up and I didn’t know
          what I was writing about sometimes.
        </p>
        <p>
          Because all of these things, I made up my mind to improve my coding
          speed
        </p>
      </div>
      <div ClassName="diffblog_otherArticles">
        <div className="diffblog_otherArticles_heading">
          <p>Articles that you may want to read</p>
        </div>
        <div className="diffblog_otherArticles_card">
          <img src={image1} alt="#" />
          <div className="diffblog_otherArticles_card_democontent">
            <h3>
              <NavLink
                to={{
                  pathname: "/blog1"
                }}
                style={{ color: "black", fontFamily: "'Raleway',sans-serif" }}
              >
                How Web-D has changed the world
              </NavLink>
            </h3>
            <span>21 May</span>
            <span>6 minute read</span>
          </div>
        </div>
        <div className="diffblog_otherArticles_card">
          <img src={image2} alt="#" />
          <div className="diffblog_otherArticles_card_democontent">
            <h3>
              <NavLink
                to="/blog2"
                style={{ color: "black", fontFamily: "'Raleway',sans-serif" }}
              >
                How to improve Typing Speed
              </NavLink>
            </h3>
            <span>28 july</span>
            <span>7 minute read</span>
          </div>
        </div>
        <div className="diffblog_otherArticles_card">
          <img src={image3} alt="#" />
          <div className="diffblog_otherArticles_card_democontent">
            <h3>
              <NavLink
                to="/blog3"
                style={{ color: "black", fontFamily: "'Raleway',sans-serif" }}
              >
                Work Culture at Big Companies
              </NavLink>
            </h3>
            <span>18 Jan</span>
            <span>15 minute read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
