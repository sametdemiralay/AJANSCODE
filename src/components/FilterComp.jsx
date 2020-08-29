import React from "react";

const FilterComp = ({ veri, setFilterKey }) => {
  return (
    <li
      data-aos="flip-left"
      className="course-item-li"
      onClick={() => setFilterKey(veri.filter)}
    >
      {veri.title}
    </li>
  );
};

export default FilterComp;
