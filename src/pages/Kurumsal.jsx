import React from "react";

import HeaderSection from "../components/HeaderSection";

const Kurumsal = () => {
  return (
    <div>
      <HeaderSection title={"KURUMSAL"} smallTitle="Hakkımızda" />
      <div className="about-section section-padding about-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img2">
                <img
                  src="images/corporate-minimal-about.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>
                1987 yılından beri sektörde hizmet veren ve 1993 yılında Ajans
                Code Komünikasyon Hizmetleri Ltd. Şti. olarak kurumsallaşan
                ajansımız, kuruluşundan bu yana Türkiye'nin en başarılı
                firmalarının tanıtım çalışmalarını üstlenmiştir. AjansCode
                Komünikasyon Hizmetleri olarak; deneyimli kadromuz ve iş
                prensibi anlayışımızla, firma ve ürün tanıtımlarınızda, farklı
                ve estetik tasarımları yaratıcı çalışmalara dönüştürür, farklı
                perspektiflerden iletişim stratejileri geliştirir, uygular ve
                uygulatırız. Biz, firmanızın ve reklamınızın hedef kitlenize
                doğru bir şekilde ulaşabilmesi ve etkili olabilmesi için
                ihtiyacınız olan çalışmayı analiz ediyor ve bu doğrultuda
                ilerliyoruz. İhtiyaç duyduğunuz; kurumsal kimlik, grafik
                tasarım, matbaa, web tasarım, medya planlaması, marka
                danışmanlığı, açık hava reklamları, basın ilanları, stand
                hazırlıkları ve organizasyon hizmetleriyle A'dan Z'ye tüm
                çalışmaları en uygun ve kaliteli hizmet anlayışı ile yerine
                getiriyoruz. Bu doğrultuda; akılda kalıcı, yaratıcı, kaliteli ve
                güvenilir çözümler sunmak için daima yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurumsal;
