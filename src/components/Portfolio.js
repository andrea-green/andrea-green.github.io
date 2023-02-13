import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Check out my latest projects!</h3>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                <li className="grid-sizer" />
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/cozynote.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Python, Flask, React/Redux</span>
                      <h3 className="title">CozyNote</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link popup-youtube"
                      href="https://cozy-note.onrender.com/"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/whiskord.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Python, Flask, React/Redux, socket.io </span>
                      <h3 className="title">Whiskord</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link popup-vimeo"
                      href="https://whiskord-htb4.onrender.com/"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/snow-bee.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Express, JavaScript, React/Redux </span>
                      <h3 className="title">SnowBee</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://andrea-green-api-project.onrender.com/"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
