import React from "react";
import "./Blog1.css";
import "./Blog2.css";
import { NavLink } from "react-router-dom";
import image1 from "./pexels-lisa-2349209.jpg";
import image3 from "./pexels-picography-4458.jpg";
import image4 from "./pexels-pixabay-265667.jpg";
import postImage from "../webdevelopment4_img.jpg";
const Blog2 = () => {
  return (
    <div className="diffblog">
      <div className="diffblog_postImg">
        <img src={postImage} alt="#" />
      </div>
      <div className="diffblog_heading">
        <h1>How to improve typing speed</h1>
      </div>
      <div className="diffblog_content">
        <p>
          If there’s one thing that’s really frustrating, it’s being a slow
          typist. I know what it’s like to be the person embarrassed because the
          world of technology was leaving me behind.
        </p>
        <p>
          Truthfully it didn’t become a huge problem for me until I became a
          legal assistant at a very busy law office. Suddenly I had pages and
          pages of letters, memos, dictations, pleadings, and more that needed
          to be typed accurately and quickly. As someone who did not start out
          as the world’s fastest typist, I knew I had to get better (and fast.)
          Using the below methods, I managed to pull my speed up from 55 words
          per minute to 90 words per minute in just two months.
        </p>
        <div className="Large">Focus on accuracy over speed</div>
        <p>
          When I was learning to type, I spent a lot of time trying to get the
          words out as quickly as possible. That turned out to be exactly the
          wrong approach. I would type really quickly and have dozens of typos,
          which took a lot longer to correct than taking my time would have.
          It’s more important to get comfortable with the keyboard and type
          accurately than it is to type 85 words per minute right out the gate.
          This is mostly because getting really comfortable and confident that
          you’re typing accurately will give you the mental boost you need to
          begin typing faster without thinking about it.
        </p>
        <div className="Large">The money side of it:</div>
        <p>
          No matter how fast you think you are with 2 fingers, you will always
          be faster with 8-10. It is not so much about hitting keys faster with
          one finger at a time, it is about muscle memory and your body knowing
          “this word, these keys, in this order = these fingers to be move now!
          “. With a 2-5 finger system it is about “move one finger from this key
          to another”
        </p>
        <p>
          Less time used in typing down your blog entries means more blog
          entries in the same amount of time. And you will start to do more
          editing, because it is not so much of a hassle. Improving your typing
          skills also does speed up mails and IM conversations. Being able to
          position your hands on the keyboard without having to look at it, just
          start typing, etc, all adds up over the day.
        </p>
        <p>
          If you can type blind, you also can look at your notes and type them
          down, instead of reading the notes, looking at the keyboard, refocus
          again on the notes, and so on.
        </p>
      </div>
      <div className="partition">
        <hr />
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
        <div className="diffblog_otherArticles_card">
          <img src={image4} alt="#" />
          <div className="diffblog_otherArticles_card_democontent">
            <h3>
              <NavLink
                to="./blog4"
                style={{ color: "black", fontFamily: "'Raleway',sans-serif" }}
              >
                Improve Coding Speed
              </NavLink>
            </h3>
            <span>14 August</span>
            <span>8 minute read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
