const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className=""
              data-animate="active"
            >
              <a href="index.html">
                <img src="Logo/logo.svg" alt="image" className="h-full"/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                <li>
                  Sunday - Sunday
                  <em>08:00 am - 09:00pm</em>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                  Doctor's Colony Rd, Kavuri Hills, Madhapur, Hyderabad
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="home/about.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="home/about.png" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="home/blog3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="home/blog3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="home/banner.png"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="home/banner.png" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2024 Lush Cafe. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
