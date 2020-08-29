import React from "react";
import ButtonComp from "../components/ButtonComp";

const NotFound = () => {
  return (
    <div class="blog main-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="error-page text-center error-404 not-found">
              <div class="error-header">
                <h2>
                  <strong>
                    <i className="fas fa-frown"></i>
                  </strong>
                </h2>
              </div>
              <div class="error-message">
                <h3>Böyle bir sayfa yok...</h3>
              </div>

              <div class="error-content">
                <ButtonComp page={""} icon={"fa fa-star"} text={"ANASAYFA"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
