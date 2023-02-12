const About = () => {
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3 style={{fontSize:"200px"}}>1000</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3 style={{fontSize:"100px"}}>+</h3>
                  <p>hours experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                {/* <span>Have A Nice Day!</span> */}
                <h3>About Me!</h3>
              </div>
              <div className="text">
                <p>
                I love seeking out new challenges and opportunities to improve my skills, and
                am driven by my love of learning and my passion for this field,
                which I see as having endless opportunities for growth and development.

                </p>
              </div>
              <div className="dodo_progress">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={90}
                        data-color="#000"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img
                            className="svg"
                            src="img/svg/photoshop.svg"
                            alt=""
                          />
                          <span className="number">90%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={75}
                        data-color="#0ACF83"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/xd.svg" alt="" />
                          <span className="number">75%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={80}
                        data-color="#f75023"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/figma.svg" alt="" />
                          <span className="number">80%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
