import React, { useEffect } from "react";
import Aos from "aos";
import ReferansData from "../database/referanslar.json";
import ReferansItem from "../components/ReferansItem";

import HeaderSection from "../components/HeaderSection";

const Referanslar = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="category-section">
      <HeaderSection title="Referanslar" smallTitle=" " />
      <div className="container mt-5">
        <div className="row no-gutters">
          {ReferansData.map((val) => (
            <ReferansItem veri={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referanslar;
