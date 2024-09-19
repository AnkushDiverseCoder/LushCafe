import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/history_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="relative p-8 bg-transparent first:mt-0">
          {/* <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[900px_auto] bg-center bg-no-repeat" style={{ backgroundImage: "url(Logo/logo.svg)", opacity: 0.2 }}></div>
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    About Kaffen
                  </div>
                  <h3
                    className="kf-title element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    New London Coffee Founded For Extraordinary Test
                  </h3>
                </div>
                <div
                  className="kf-text element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis
                  </p>
                </div>
                <div className="kf-choose-list">
                  <ul>
                    <li
                      className="element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <img src="images/choose_icon1.png" alt="image" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Natural Coffee Beans</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                    <li
                      className="element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <img src="images/choose_icon2.png" alt="image" />
                      </div>
                      <div className="desc">
                        <h5 className="name">100% ISO Certification</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  href="menu-coffee"
                  className="kf-btn element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>our menu</span>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
                <div
                  className="kf-choose-image rounded-lg element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <img src="home/about.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Video */}
      <section className="section kf-video">
        <div className="container">
          <VideoPlayer
            videoBg={"images/video_bg.jpg"}
            extraClass={"kf-image-hover"}
          />
        </div>
      </section>
      {/* Section Team */}
      <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Anthony J. Bowman</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label">bowmankf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Kenny V. Gonzalez</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team2.jpg" alt="image" />
                  <div className="info">
                    <div className="label">gonzalezkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Joseph M. Lawrence</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team3.jpg" alt="image" />
                  <div className="info">
                    <div className="label">lawrencekf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Charles K. Smith</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team4.jpg" alt="image" />
                  <div className="info">
                    <div className="label">smithkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
    </Layouts>
  );
};
export default About;
