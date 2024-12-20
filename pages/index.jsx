import MainSlider from "@/src/components/sliders/MainSlider";
import Layouts from "@/src/layouts/Layouts";
import Image from "next/image";
import Link from "next/link";

const Index = () => {

  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Organic &amp; Fresh Coffee <br />
                  Provider Center
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Welcome to Lush Café, a vibrant fusion of flavors and
                  ambiance, where culinary artistry meets the relaxed spirit of
                  <span className="text-yellow-400 text-lg italic"> Goa.</span> Nestled by the serene <span className="text-yellow-400 text-lg italic">Durgam Cheruvu</span> Lake—one of
                  Hyderabad's hidden gems—our café offers a delightful escape
                  with stunning <span className="text-yellow-400 text-lg italic"> Waterfront</span> views. Our menu is a creative blend
                  of global and Indian cuisines, featuring <span className="text-yellow-400 text-lg italic"> Signature dishes </span>
                  crafted by our team of master chefs. Each dish is an ode to
                  flavors, perfected over years of expertise and passion.
                </p>
                <br />
                <p>
                  Step into our <span className="text-yellow-400 text-lg italic"> Bohemian</span>-inspired space, adorned with earthy
                  tones and artistic elements that reflect Goa’s carefree charm,
                  creating an inviting atmosphere for every guest. Whether
                  you're here for a hearty meal, a cup of <span className="text-yellow-400 text-lg italic"> Artisanal coffee</span>, or a
                  laid-back evening by the lake, <span className="text-yellow-400 text-lg italic"> Lush Café</span> promises a unique
                  culinary journey where flavor, style, and nature converge.
                </p>
              </div>
              {/* <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/quote_img.png" alt="image" />
                <div>
                  Quis autem vel eum iure reprehenderit in ealuptate velit esse
                  molestiae
                </div>
              </div> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

              <div className="relative w-full h-full overflow-hidden"> {/* Parent container */}
                <Image
                  src="home/about.png"
                  alt="Banner Image"
                  fill // No width or height props when using fill
                  className="object-cover rounded-lg" // Ensure it covers the entire area
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer */}
      <div className="py-14 section kf-services section-bg">
        <div className="mx-auto md:container">
          <div
            className="relative z-20 rounded-lg shadow-xl overflow-hidden min-h-[45vh] lg:grid lg:grid-cols-2 lg:gap-4 bg-cover h-auto md:bg-[url('/offerBanner.png')] bg-[url('/offerBanner1.jpg')]"
          >
          </div>
        </div>
      </div>


      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Best Drinks
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Lush Cafe Signature Drinks
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(images/menu_logo.png)" }}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/Bambelio.jpeg" className="has-popup-image">
                      <Image
                        src="/home/menu/Bambelio.jpeg"
                        alt="Bamboleo"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Bamboleo</h5>
                    <div className="subname">Passion Fruit Syrup, Coconut Syrup, Milk</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/BrazilianLemonade.jpg" className="has-popup-image">
                      <Image
                        src="/home/menu/BrazilianLemonade.jpg"
                        alt="Brazilian Lemonade"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Brazilian Lemonade</h5>
                    <div className="subname">a creamy, icy, and refreshing drink made with limes, sugar, condensed milk, and ice</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/PingPong.jpeg" className="has-popup-image">
                      <Image
                        src="/home/menu/PingPong.jpeg"
                        alt="Ping Pong"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Ping Pong</h5>
                    <div className="subname">Pomegranate, Raspberry, Cranberry</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/Cinamonbasil.png" className="has-popup-image">
                      <Image
                        src="/home/menu/Cinamonbasil.png"
                        alt="Cinnamon Basil"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Cinnamon Basil</h5>
                    <div className="subname">Fresh Cinnamon stick, Basil leaves touch off Apple Juice</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/eSalaCupNamde.jpeg" className="has-popup-image">
                      <Image
                        src="/home/menu/eSalaCupNamde.jpeg"
                        alt="Ee Sala Cup Namde"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Ee Sala Cup Namde</h5>
                    <div className="subname">Orange Chunks, Basil leaves, Peach Syrup, Orange Juice</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="home/menu/saffronCream.jpg" className="has-popup-image">
                      <Image
                        src="/home/menu/saffronCream.jpg"
                        alt="Saffron Cream"
                        fill
                      // width={500}
                      // height={500}
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Saffron Cream</h5>
                    <div className="subname">Saffron Syrup, Amul Cream, Orange Juice</div>
                    <div className="price">&#8377;349</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers */}
      {/* <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">256+</div>
                <div className="desc">
                  <h5 className="name">Premium Clients</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">362+</div>
                <div className="desc">
                  <h5 className="name">Expert Members</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">753+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <div className="relative w-full h-full overflow-hidden"> {/* Parent container */}
                      <Image
                        src="home/blog1.jpg"
                        alt="Banner Image"
                        fill // No width or height props when using fill
                        className="object-cover rounded-lg" // Ensure it covers the entire area
                      />
                    </div>
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">A Culinary Journey Like No Other</h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <div className="relative w-full h-full overflow-hidden"> {/* Parent container */}
                      <Image
                        src="home/blog2.jpg"
                        alt="Banner Image"
                        fill // No width or height props when using fill
                        className="object-cover rounded-lg" // Ensure it covers the entire area
                      />
                    </div>
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">White - themed Place Ambience</h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <div className="relative w-full h-full overflow-hidden"> {/* Parent container */}
                      <Image
                        src="home/blog3.jpg"
                        alt="Banner Image"
                        fill // No width or height props when using fill
                        className="object-cover rounded-lg" // Ensure it covers the entire area
                      />
                    </div>
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Breathtaking Rooftop Views</h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
