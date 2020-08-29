import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const mobileDropDown = () => {
    setIsOpen(!isOpen);
    setIsOpenMenu(!isOpenMenu);
  };
  const navMenuOpenOrClose = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const onlyIslerimiz = () => {
    setIsOpen(!isOpen);
  };

  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col align-self-center" style={{ color: "#00468F" }}>
              <div className="deger">
                <span>
                  <i class="fas fa-phone"></i>
                </span>
                <span className="pl-1">+90 (212) 249 4413</span>
              </div>
              <div className="deger2">
                <span>
                  <i class="fas fa-envelope"></i>
                </span>
                <span className="pl-2">info@ajanscode.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Menu Start --> */}

      <div
        className={
          scrollPosition > 100
            ? "site-navigation main_menu sabitNav"
            : "site-navigation main_menu"
        }
        id="mainmenu-area"
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <span className="navbar-brand" href="">
              <img
                src="images/ajanscode-logo.png"
                alt="ajanscode"
                className="img-fluid"
                width="220px"
              />
            </span>

            {/* <!-- Toggler --> */}

            <button
              className={
                isOpenMenu ? "navbar-toggler collapsed" : "navbar-toggler"
              }
              style={{ backgroundColor: "#FFF" }}
              type="button"
              onClick={() => navMenuOpenOrClose()}
            >
              <span className="fa fa-bars"></span>
            </button>

            {/* <!-- Collapse --> */}
            <div
              className={
                isOpenMenu
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarMenu"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <Link to="/" onClick={() => navMenuOpenOrClose()}>
                    <span className="nav-link text-center">ANASAYFA</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/kurumsal" onClick={() => navMenuOpenOrClose()}>
                    <span className="nav-link text-center">KURUMSAL</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/referanslar" onClick={() => navMenuOpenOrClose()}>
                    <span className="nav-link text-center">REFERANSLAR</span>
                  </Link>
                </li>
                <li
                  className={
                    isOpen ? "nav-item dropdown show" : "nav-item dropdown"
                  }
                >
                  <Link
                    to="/islerimiz/grafik-tasarim"
                    onClick={() => onlyIslerimiz()}
                  >
                    <span className="nav-link dropdown-toggle text-center">
                      İŞLERİMİZ
                    </span>
                  </Link>
                  <div
                    className={
                      isOpen
                        ? "dropdown-menu show text-center"
                        : "dropdown-menu dropdown text-center"
                    }
                    aria-labelledby="navbar3"
                  >
                    <Link
                      to="/islerimiz/grafik-tasarim"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">Grafik Tasarım</span>
                    </Link>
                    <Link
                      to="/islerimiz/web-tasarim-yazilim"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">
                        Web Tasarım & Yazılım
                      </span>
                    </Link>
                    <Link
                      to="/islerimiz/logo-kurumsal-kimlik"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">
                        Logo & Kurumsal Kimlik
                      </span>
                    </Link>
                    <Link
                      to="/islerimiz/tanitim-filmi"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">Tanıtım Filmi</span>
                    </Link>
                    <Link
                      to="/islerimiz/sosyal-medya"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">Sosyal Medya</span>
                    </Link>
                    <Link
                      to="/islerimiz/fotograf-cekimlerimiz"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">
                        Fotoğraf Çekimlerimiz
                      </span>
                    </Link>
                    <Link
                      to="/islerimiz/3d-modelleme"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">3D Modelleme</span>
                    </Link>
                    <Link
                      to="/islerimiz/3d-animasyon"
                      onClick={() => mobileDropDown()}
                    >
                      <span className="dropdown-item">3D Animasyon</span>
                    </Link>
                  </div>
                </li>

                <li className="nav-item ">
                  <Link to="/iletisim" onClick={() => navMenuOpenOrClose()}>
                    <span className="nav-link text-center">İLETİŞİM</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- / .navbar-collapse --> */}
          </div>
          {/* <!-- / .container --> */}
        </nav>
      </div>
    </header>
  );
};

export default NavigationSection;
