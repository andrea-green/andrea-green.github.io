import { useEffect } from "react";
import { scroll_ } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Professional Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <ul>
              <li>
                <a href="https://github.com/andrea-green">
                  <img
                    className="svg"
                    src="img/svg/social/github.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/andrea-green-201146245/">
                  <img
                    className="svg"
                    src="img/svg/social/linkedin.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
