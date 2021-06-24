import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./Blog1.css";
import postImage from "../webdevelopment4_img.jpg";
import image2 from "./pexels-markus-winkler-4057663.jpg";
import image3 from "./pexels-picography-4458.jpg";
import image4 from "./pexels-pixabay-265667.jpg";
const Blog1 = () => {
  const history = useHistory();
  const Back = () => {
    history.push("/blog");
  };
  return (
    <div className="diffblog">
      <div className="diffblog_postImg">
        <img src={postImage} alt="#" />
      </div>
      <div className="diffblog_heading">
        <h1>How Web-D has changed the world ?</h1>
      </div>
      <div className="diffblog_content">
        <p>
          If you grew up thinking that the Web always existed since you were
          born, you may be right. If not, you may remember the very early days
          of the Web.
        </p>
        <p>
          Two years ago we celebrated the invention of the Web on the
          anniversary of the March 1989 memo written by Tim Berners-Lee
          outlining his proposal for the World Wide Web. On Saturday we
          celebrate not only the brilliance of the Web’s conception but the
          world-changing point at which the Web was offered as a publicly
          available service.
        </p>
        <p>
          25 years ago, on 6 August 1991, Tim Berners-Lee, posted information
          about the WorldWideWeb project on the newsgroup (like a message board)
          alt.hypertext and invited wide collaboration – marking, in one email,
          the Web’s introduction to the wider world.
        </p>
        <p>
          Even at the start of his work on the Web Tim offered it to everyone,
          opening it for contribution from all. Because so many around the globe
          have taken him up on his offer and have helped to develop the Web, to
          create and share content as well as to build standards to keep it
          interoperable and innovative, the Web has become not just a repository
          for knowledge and sharing beyond the dreams of any library, but one of
          the most unique and powerful tools in history.
        </p>
        <p>
          The Web has changed all our lives and we are pleased to celebrate the
          historical occasion of its release to the public 25 years ago. At W3C
          we continue to uphold our core values of openness, collaboration and
          innovation in our standards while we pursue our mission of leading the
          Web to its full potential.
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

export default Blog1;
