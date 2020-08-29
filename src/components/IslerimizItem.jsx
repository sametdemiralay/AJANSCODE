import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import ReactImageVideoLightbox from "react-image-video-lightbox";

const IslerimizItem = ({ veri, num, heightValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const samcoo = () => {
    if (isOpen && num === 0) {
      return (
        <Lightbox
          mainSrc={[`/images/${veri.title}.jpg`]}
          onCloseRequest={() => setIsOpen(!isOpen)}
        />
      );
    } else if (isOpen && num === 2) {
      return (
        <ReactImageVideoLightbox
          data={[
            {
              url: "https://www.youtube.com/embed/lhAArW89-U4",
              type: "video",
              altTag: `${veri.title}`,
            },
          ]}
          startIndex={0}
          showResourceCount={true}
          onCloseCallback={() => setIsOpen(!isOpen)}
        />
      );
    }
  };

  return (
    <div
      className={"course-item filter-item col-lg-3 col-sm-6 p-3 " + veri.filter}
      key={veri.id}
      style={{ cursor: "pointer" }}
    >
      <div className="course-block">
        <div className="course-img m-0 text-center">
          {num === 1 ? (
            <a href={veri.link} target="_blank">
              <img
                src={`/images/${veri.title}.jpg`}
                alt={veri.title}
                className="img-fluid"
                style={{ height: heightValue, width: "100%" }}
              />
            </a>
          ) : (
            <img
              src={`/images/${veri.title}.jpg`}
              alt={veri.title}
              className="img-fluid"
              style={{ height: heightValue, width: "260px" }}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {samcoo()}
    </div>
  );
};

export default IslerimizItem;
