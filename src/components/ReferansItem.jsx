import React from "react";

const ReferansItem = ({ veri }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="col-md-2 hover-zoomin text-center"
      key={veri.id}
      style={{ margin: "25px 0px" }}
    >
      <img
        src={`/images/referanslar/${veri.title}.png`}
        className="img-fluid"
        alt=""
      />
    </div>
  );
};

export default ReferansItem;
