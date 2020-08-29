import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mr-auto col-sm-6 col-md-6">
              <div className="widget footer-widget mb-5 mb-lg-0">
                <h5 className="widget-title">Kurumsal</h5>
                <p className="mt-3">
                  AjansCode Komünikasyon Hizmetleri olarak; deneyimli kadromuz
                  ve iş prensibi anlayışımızla, firma ve ürün tanıtımlarınızda,
                  farklı ve estetik tasarımları yaratıcı çalışmalara dönüştürür,
                  farklı perspektiflerden iletişim stratejileri geliştirir ve
                  uygularız.
                </p>
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">
                    <Link to="https://www.facebook.com/ajanscode/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://tr.linkedin.com/">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://www.youtube.com/channel/UCiNBi4w7JbfyfOsTP-wZvKw">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="footer-widget mb-5 mb-lg-0">
                <h5 className="widget-title">İşlerimiz</h5>
                <ul className="list-unstyled footer-links row">
                  <div className="col-md-6">
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/grafik-tasarim">Grafik Tasarım</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/web-tasarim-yazilim">
                        Web Tasarım
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/logo-kurumsal-kimlik">
                        Kurumsal Kimlik
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/tanitim-filmi">Tanıtım Filmi</Link>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/sosyal-medya">Sosyal Medya</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/fotograf-cekimlerimiz">
                        Fotoğraf
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/3d-modelleme">3D Modelleme</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right pr-1"></i>
                      <Link to="/islerimiz/3d-modelleme">3D Animasyon</Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget mb-5 mb-lg-0">
                <h5 className="widget-title">İletişim</h5>
                <ul className="list-unstyled footer-links">
                  <li style={{ display: "flex" }}>
                    <i
                      class="fas fa-phone"
                      style={{ paddingRight: "10px", paddingTop: "10px" }}
                    ></i>
                    <p>+90 (212) 249 4413</p>
                  </li>
                  <li style={{ display: "flex" }}>
                    <i
                      class="fas fa-envelope"
                      style={{ paddingRight: "10px", paddingTop: "10px" }}
                    ></i>
                    <p>info@ajanscode.com</p>
                  </li>
                  <li style={{ display: "flex" }}>
                    <i
                      class="fas fa-map-marker-alt"
                      style={{ paddingRight: "10px", paddingTop: "10px" }}
                    ></i>
                    <p>İncirli Caddesi No: 1 Kat: 1 Bakırköy / İstanbul</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 text-center">
                <div className="footer-logo">
                  <img
                    src="images/ajanscode-logo.png"
                    alt="ajanscode"
                    className="img-fluid"
                    width="220px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-btm-top">
        <button onClick={(e) => backToTop(e)} className="btn to-top-button">
          <i className="fa fa-angle-up"></i>
        </button>
      </div>
    </div>
  );
};

export default FooterSection;
