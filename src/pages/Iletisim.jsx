import React from "react";
import GoogleMapReact from "google-map-react";
import ButtonComp from "../components/ButtonComp";

import HeaderSection from "../components/HeaderSection";

const HaritaYazi = ({ text }) => <div>{text}</div>;

const Iletisim = () => {
  const [aga, setAga] = React.useState({ lat: 40.98, lng: 28.87 });
  return (
    <div className="contact-info">
      <HeaderSection title="İLETİŞİM" smallTitle=" " />
      <div className="container" style={{ padding: "100px 0px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6 text-center">
                <div className="contact-item">
                  <p>Email</p>
                  <h4>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="e3909693938c9197a3868e828a8fcd808c8e"
                    >
                      info@ajanscode.com
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 text-center">
                <div className="contact-item">
                  <p>Telefon</p>
                  <h4>+90 (212) 249 4413</h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 text-center">
                <div className="contact-item">
                  <p>Adres</p>
                  <h4>İncirli Caddesi No: 1 Kat: 1 Bakırköy / İstanbul</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              className="contact__form form-row "
              method="POST"
              action="mail.php"
              id="contactForm"
            >
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Ad"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Konu"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="6"
                      className="form-control"
                      placeholder="Mesaj..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mt-4 text-right">
                  {/* <button className="btn btn-main" type="submit">Gönder <i className="fa fa-angle-right ml-2"></i></button> */}
                  <ButtonComp
                    page={"gonder"}
                    icon={"fas fa-paper-plane"}
                    text={"Gönder"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ margin: "50px 0px" }}>
        <div style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBjzlbOFMHZT27eauQ2m_6fPHR5LSRVRmI",
            }}
            defaultCenter={aga}
            defaultZoom={18}
          >
            <HaritaYazi lat={40.982382} lng={28.87283} text="SELAM" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
