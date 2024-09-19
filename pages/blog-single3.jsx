import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const BlogSingle = () => {
  return (
    <Layouts>
      {/* Section Archive Started */}
      <section className="section kf-archive-started">
        <div className="container">
          <div className="kf-titles">
            <div
              className="kf-date element-anim-1 scroll-animate"
              data-animate="active"
            >
              25 Sep 2021 - <Link href="blog">Recipes</Link>
            </div>
            <h1
              className="kf-p-title text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              Breathtaking Rooftop Views
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(home/blog3.jpg)" }}
        />
      </section>
      {/* Section Archive */}
      <section className="section kf-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div
                className="post-content element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Lush Cafe is renowned for its unparalleled rooftop setting, offering diners a spectacular view of the serene Durgum Cheruvu. Whether you visit during the day to bask in the natural beauty of the lake or at night when the city lights up, the view from Lush Cafe is always mesmerizing. The tranquil waters of Durgum Cheruvu and the skyline of Hyderabad create a backdrop that’s perfect for everything from a relaxing coffee break to a romantic dinner. It’s not just a meal; it’s a feast for the eyes.
                </p>
                {/* <blockquote>
                  <p>
                    Photography is the story I fail to put into words get ligula
                    vel, commodo luctus felis. Ut dignissim sapien sit amet
                    molestie rutr
                  </p>
                  <cite>Destin Sparks</cite>
                </blockquote> */}
                {/* <p>
                  Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla
                  et tristique orci. Pellentesque lectus sapien, maximus id
                  gravida sit amet, tristique non eros. Etiam aliquet, sem vitae
                  sagittis convallis, ante sapien tincidunt nisl, eget dapibus
                  tortor velit quis ex. Proin et condimentum est, sed pretium
                  ex. Mauris posuere est metus, vitae commodo sem posuere eget.
                  Praesent maximus augue rutrum, consequat magna id, facilisis
                  lorem. Quisque molestie, turpis ac interdum gravida
                </p> */}
                <p>
                  <br />
                </p>
                <h3>Aliquam vel sem vel vellesuada</h3>
                <p>
                  <br />
                </p>
                <p>
                  <img src="home/blog/blog11.jpg" alt="image" />
                </p>
                {/* <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                  dignissim sapien sit amet molestie rutrum. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Pellentesque in porta dolor, a suscipit risus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                  arcu in lorem rhoncus ullamcorper. Ut at nulla ut libero
                  mollis viverra sed vitae purus.
                </p>
                <ul>
                  <li>
                    Donec arcu lacus, ornare eget ligula vel, commodo luctus
                    felis.
                  </li>
                  <li>Ut dignissim sapien sit amet molestie rutrum.</li>
                  <li>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes.
                  </li>
                  <li>Ut at nulla ut libero mollis viverra sed vitae purus.</li>
                </ul>
                <p>
                  Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla
                  et tristique orci. Pellentesque lectus sapien, maximus id
                  gravida sit amet, tristique non eros. Etiam aliquet, sem vitae
                  sagittis convallis, ante sapien tincidunt nisl, eget dapibus
                  tortor velit quis ex.
                </p> */}
              </div>

              <div
                className="post-details element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span className="tags-links">
                  <span>Tags:</span>
                  <Link href="blog">photo</Link>
                  <Link href="blog">fashion</Link>
                  <Link href="blog">creative</Link>
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default BlogSingle;
