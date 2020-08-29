import React from "react";
import { Link } from "react-router-dom";

const IslerimizGenelItem = ({ veri }) => {
  return (
    <div data-aos="zoom-in" className="col-lg-3 col-sm-6" key={veri.id}>
      <Link to={veri.link} style={{ textDecoration: "none" }}>
        <div className="feature-item feature-style-2">
          <div className="feature-icon">
            <i className={veri.icon}></i>
          </div>
          <div className="feature-text">
            <h4 style={{ fontSize: "19px" }}>{veri.title}</h4>
            <p className="textShorter">{veri.content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default IslerimizGenelItem;
