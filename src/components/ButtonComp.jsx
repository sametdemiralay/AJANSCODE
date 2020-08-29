import React from "react";
import { Link } from "react-router-dom";

const ButtonComp = ({ page, icon, text }) => {
  return (
    <div class="wrap-samco">
      <Link to={"/" + page} class="samco1">
        <i className={icon + " mr-1"}></i>
        {text}
      </Link>
    </div>
  );
};

export default ButtonComp;
