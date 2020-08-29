import React, { useState, useEffect } from "react";
import IslerimizItem from "../components/IslerimizItem";
import GrafikTasarim from "../database/islerimiz/grafikTasarim.json";
import WebTasarimYazilim from "../database/islerimiz/webTasarimYazilim.json";
import LogoKurumsalKimlik from "../database/islerimiz/logoKurumsalKimlik.json";
import TanitimFilmi from "../database/islerimiz/tanitimFilmi.json";
import SosyalMedya from "../database/islerimiz/sosyalMedya.json";
import FotografCekimlerimiz from "../database/islerimiz/fotografCekimlerimiz.json";
import Modelleme3D from "../database/islerimiz/Modelleme3D.json";
import Animasyon3D from "../database/islerimiz/Animasyon3D.json";

import HeaderSection from "../components/HeaderSection";

const Islerimiz = ({ match }) => {
  const currentUserId = match.params.token;
  const [deger, setDeger] = useState([]);
  const [num, setNum] = useState(0);
  const [baslik, setBaslik] = useState("");
  const [heightValue, setHeightValue] = useState("");

  useEffect(() => {
    switch (currentUserId) {
      case "grafik-tasarim":
        setDeger(GrafikTasarim);
        setNum(0);
        setBaslik("Grafik Tasarım");
        setHeightValue("300px");
        break;
      case "web-tasarim-yazilim":
        setDeger(WebTasarimYazilim);
        setNum(1);
        setBaslik("Web Tasarım ve Yazılım");
        setHeightValue("300px");
        break;
      case "logo-kurumsal-kimlik":
        setDeger(LogoKurumsalKimlik);
        setNum(0);
        setBaslik("Logo ve Kurumsal Kimlik");
        setHeightValue("150px");
        break;
      case "tanitim-filmi":
        setDeger(TanitimFilmi);
        setNum(2);
        setBaslik("Tanıtım Filmi");
        setHeightValue("300px");
        break;
      case "sosyal-medya":
        setDeger(SosyalMedya);
        setNum(0);
        setBaslik("Sosyal Medya");
        setHeightValue("300px");
        break;
      case "fotograf-cekimlerimiz":
        setDeger(FotografCekimlerimiz);
        setNum(0);
        setBaslik("Fotoğraf Çekimlerimiz");
        setHeightValue("300px");
        break;
      case "3d-modelleme":
        setDeger(Modelleme3D);
        setNum(0);
        setBaslik("3D Modelleme");
        setHeightValue("300px");
        break;
      case "3d-animasyon":
        setDeger(Animasyon3D);
        setNum(2);
        setBaslik("3D Animasyon");
        setHeightValue("300px");
        break;
      default:
        break;
    }
  }, [currentUserId]);

  return (
    <div>
      <HeaderSection title={baslik} smallTitle={"İşlerimiz"} />
      <div className="container" style={{ padding: "50px 0px" }}>
        <div className="row">
          {deger.map((val) => (
            <IslerimizItem veri={val} num={num} heightValue={heightValue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Islerimiz;
