import React from "react";
import "./Blog.css";
import image1 from "./webdevelopment4_img.jpg";
import "./articles/Article.js";
import Article from "./articles/Article.js";
const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog_left">
          <h1>Heaven of blogs</h1>
          <p>
            Hello, I am Srijan Saurabh Jha.Apart from being a web developer ,I
            do write blogs related to the field of computer science. You may
            have a look at my blogs. I garuntee you that you will have a descent
            experience ahead.
          </p>
        </div>
        <div className="blog_right">
          <img src={image1} alt="#" />
        </div>
      </div>
      <div class="seperator">
        <hr />
      </div>
      <Article />
    </>
  );
};

export default Blog;
