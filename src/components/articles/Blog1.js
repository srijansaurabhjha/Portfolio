import React from "react";
import { useHistory } from "react-router-dom";
import "./Blog1.css";
const Blog1 = () => {
  const history = useHistory();
  const Back = () => {
    history.push("/blog");
  };
  return (
    <div className="blog1">
      <button onClick={Back}>Back</button>
    </div>
  );
};

export default Blog1;
