import React from "react";
import "./Blog1.css";
import "./Blog3.css";
import { NavLink } from "react-router-dom";
import image1 from "./pexels-lisa-2349209.jpg";
import image2 from "./pexels-markus-winkler-4057663.jpg";
import image4 from "./pexels-pixabay-265667.jpg";
import postImage from "../webdevelopment4_img.jpg";
const Blog3 = () => {
  return (
    <div className="diffblog">
      <div className="diffblog_postImg">
        <img src={postImage} alt="#" />
      </div>
      <div className="diffblog_heading">
        <h1>Work Culture at Big Companies</h1>
      </div>
      <div className="diffblog_content">
        <p>
          Workplace culture isn’t something you can measure out and add just so
          like making a cake. Still, an effective workplace culture is a magic
          ingredient with many powerful benefits. When people feel connected to
          their workplace culture, they become productive and engaged.
        </p>
        <p>
          Organizations all have cultures, whether they’ve been developed
          intentionally or come about by chance. These cultures can be
          characterized by a set of mutually agreed-upon norms that govern how
          stakeholders operate with reference to each other.
        </p>
        <p>
          Bad workplace cultures tend to rise on their own as a result of
          unexamined assumptions. A small firm may have ad-hoc ways of getting
          things done that work at first, but don’t stay effective over time. In
          this case, a workplace culture can be stifling.
        </p>
        <p>
          On the other hand, a good workplace culture encourages everybody to
          reach their full potential. There are just as many ways for a company
          culture to be good as there are for it to be bad.
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

export default Blog3;
