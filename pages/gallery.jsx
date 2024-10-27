import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
import Link from "next/link";

const PhotoGalleryIsotope = dynamic(
  () => import("@/src/components/PhotoGalleryIsotope"),
  {
    ssr: false,
  }
);

const Gallery = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/gallery_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Gallery
          </h1>
        </div>
      </section>
      {/* Section Gallery */}
      <PhotoGalleryIsotope />
    </Layouts>
  );
};
export default Gallery;
