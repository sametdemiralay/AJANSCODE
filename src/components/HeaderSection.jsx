import React from "react";

const HeaderSection = ({ title, smallTitle }) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="page-header-content">
              <h1 className="text-uppercase">{title}</h1>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <span>{smallTitle}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
