import React from "react";
import "./Article.css";
import image1 from "./pexels-lisa-2349209.jpg";
import image2 from "./pexels-markus-winkler-4057663.jpg";
import image3 from "./pexels-picography-4458.jpg";
import image4 from "./pexels-pixabay-265667.jpg";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
const Article = () => {
  return (
    <div className="article">
      <div className="article_head">
        <h2>Featured Articles</h2>
        <form method="get">
          <input type="text" placeholder="Search blog" />
          <Button
            style={{
              backgroundColor: "gray",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "inherit",
              color: "white",
              fontSize: "12px"
            }}
          >
            Search
          </Button>
        </form>
      </div>
      <div className="article_card">
        <div className="article_card_image">
          <img src={image1} alt="#" />
        </div>
        <div className="article_card_contentDemo">
          <h3>
            <NavLink
              to="/blog1"
              style={{ color: "black", fontFamily: "'Raleway',sans-serif" }}
            >
              How Web-D has changed the world
            </NavLink>
          </h3>
          <span>21 May</span>
          <span>6 minute read</span>
        </div>
      </div>
      <div className="article_card">
        <div className="article_card_image">
          <img src={image2} alt="#" />
        </div>
        <div className="article_card_contentDemo">
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
      <div className="article_card">
        <div className="article_card_image">
          <img src={image3} alt="#" />
        </div>
        <div className="article_card_contentDemo">
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
      <div className="article_card">
        <div className="article_card_image">
          <img src={image4} alt="#" />
        </div>
        <div className="article_card_contentDemo">
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
  );
};

export default Article;
