import { Fragment, useState } from "react";
import ContactPopup from "./popup/ContactPopup";

const Contact = () => {
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <ContactPopup show={active} close={() => setActive(false)} />
      <div className="tonni_tm_section" id="contact">
        <div className="tonni_tm_contact">
          <div className="container">
            <div className="contact_box">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <h3>
                  I want to hear from
                  <br />
                  you please{" "}
                  <a
                    className="contact_modalbox_link c-pointer"
                    onClick={() => setActive(true)}
                  >
                    contact me!
                  </a>
                </h3>
              </div>
            </div>
            <div className="short wow fadeInUp" data-wow-duration="1s">
              <div className="left">
                <span>
                  <a href="mailto:infomaya.tonni@gmail.com">
                    duong.andrea12@gmail.com
                  </a>
                  <img className="svg" src="img/svg/vector3.svg" alt="" />
                </span>
              </div>
              <div className="right">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/andrea-green-201146245/">
                        <img
                          className="svg"
                          src="img/svg/social/linkedin-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/andrea-green">
                        <img
                          className="svg"
                          src="img/svg/social/github.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>
                    © {new Date().getFullYear()} by{" "}
                    <a
                      href="https://themeforest.net/user/codeefly"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Codeefly.
                    </a>{" "}
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="shape">
            <img className="svg" src="img/svg/vector.svg" alt="" />
          </span>
          <span className="shape2">
            <img className="svg" src="img/svg/vector2.svg" alt="" />
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
