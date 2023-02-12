const TimeLine = () => {
  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <h3>My Experience</h3>
                </div>
                <div className="subtitle">
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  <li className="wow fadeInUp" data-wow-duration="1s">
                    <ul className="items">
                      <li>
                        <div className="list_inner">
                          <div className="details">
                            <div className="title">
                              <h3>App Academy</h3>
                              <span>Full Stack Software Engineering</span>
                            </div>
                            <div className="text">
                              <p>
                                1000+ hour immersive full-stack web development intensive
                                program with less than 3% acceptance rate.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="year">
                            <span>2022-2023</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="image">
                            <img src="img/thumbs/37-25.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url="img/timeline/app-academy.png"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInUp" data-wow-duration="1s">
                    <ul className="items">
                      <li>
                        <div className="list_inner">
                          <div className="details">
                            <div className="title">
                              <h3>Seattle University</h3>
                              <span>BS Mathematics, biology minor</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="year">
                            <span>2016-2018</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="image">
                            <img src="img/thumbs/37-25.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url="img/timeline/Seattle_University_seal.svg"
                              style={{ width: "67%", height:"100%" }}/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
