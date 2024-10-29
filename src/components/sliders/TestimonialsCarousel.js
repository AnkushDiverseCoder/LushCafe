import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: "url(images/testimonials_bg2.jpeg)" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Customer Feedback
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            What Our Clients Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=naveen" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      The prawns which they have served was jus finger licking good...top
                    </div>
                    <h5 className="name">
                      Naveen nani <em>1 Week Ago</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Shiv" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      The ambience and food is good here. perfect place to have a chill time with your friends and family. Loved the response of the staff. Had a good time here
                    </div>
                    <h5 className="name">
                      The Guy Is Shiv <em>1 Week Ago</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Fazal Rahman" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      Good vibes this place and food was also good really I love this place must visit.
                    </div>
                    <h5 className="name">
                      Fazal ur Rahman <em>1 Week Ago</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=bhasha pattan" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      I enjoyed food ambience and service, must visit with your loved one. Special thanks to miss Nisha, vishal
                    </div>
                    <h5 className="name">
                      bhasha pattan <em>1 Week ago</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Suman Shadangi" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      Really liked the service. Staffs are well mannered. It was a good experience.
                    </div>
                    <h5 className="name">
                    Suman Shadangi <em>1 Week Ago</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
