import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";
import ButtonComp from "../components/ButtonComp";
import Aos from "aos";

import TitleComp from "../components/TitleComp";
import FilterComp from "../components/FilterComp";

import IslerimizItem from "../components/IslerimizItem";
import ReferansItem from "../components/ReferansItem";
import IslerimizGenelItem from "../components/IslerimizGenelItem";

import AnasayfaData from "../database/anasayfa.json";

const Anasayfa = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    Aos.init({ duration: 1500 });

    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div>
      <div style={{ height: "100%", width: "100vh", zIndex: "999" }}></div>
      <video
        loop
        autoPlay
        muted
        style={{ width: "100%", objectFit: "fill", height: "89vh" }}
      >
        <source src={require("../deneme.mp4")} type="video/mp4" />
      </video>

      <section className="about-section section-padding about-2 p-0">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-img2">
                <img src="images/kurumsal.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              style={{ padding: "50px 50px" }}
            >
              <TitleComp veri="KURUMSAL" />
              <p className="textShorterLong">{AnasayfaData.kurumsal[0].yazi}</p>
              <ButtonComp
                page={"kurumsal"}
                icon={"fa fa-angle-right"}
                text={"Devamını Oku!"}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="feature-2"
        style={{ backgroundColor: "#efefef", padding: "100px 0" }}
      >
        <div className="container">
          <TitleComp veri="İŞLERİMİZ" />
          <div className="row no-gutters">
            {AnasayfaData.islerimizGenel.map((val) => (
              <IslerimizGenelItem veri={val} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-padding category-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <TitleComp veri="REFERANSLAR" />
            </div>
            <div className="col-lg-6">
              <div className="course-btn text-lg-right">
                <ButtonComp
                  page={"referanslar"}
                  icon={"fa fa-star"}
                  text={"Bütün Referanslarımız"}
                />
              </div>
            </div>
          </div>

          <div className="row no-gutters">
            {AnasayfaData.referanslar.map((val) => (
              <ReferansItem veri={val} />
            ))}
          </div>
        </div>
      </div>

      <section
        className="section-padding course-grid"
        style={{ backgroundColor: "rgb(239, 239, 239)" }}
      >
        <div className="container">
          <TitleComp veri="YAPTIĞIMIZ PROJELERDEN ÖRNEKLER" />

          <div className="text-center">
            <ul className="course-filter">
              {AnasayfaData.islerimizFiltre.map((val) => (
                <FilterComp veri={val} setFilterKey={setFilterKey} />
              ))}
            </ul>
          </div>

          <div className="row course-gallery filter-container ">
            {AnasayfaData.islerimizDetay.map((val) => (
              <IslerimizItem
                veri={val}
                num={val.num}
                heightValue={val.heightValue}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anasayfa;
