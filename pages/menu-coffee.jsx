import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";

const CoffeeMenu = dynamic(() => import("@/src/components/CoffeeMenu"), {
  ssr: false,
});

const MenuCoffee = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/service3.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Coffee Menu
          </h1>
        </div>
      </section>
      {/* Section Menu */}
      <CoffeeMenu />
    </Layouts>
  );
};
export default MenuCoffee;
