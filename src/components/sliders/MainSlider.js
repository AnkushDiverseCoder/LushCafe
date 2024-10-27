"use client"
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const MainSlider = () => {
  const [isOpen, setIsOpen] = useState(true);
  setInterval(()=>{
  setIsOpen(false)
  },[5000]);
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(home/banner.webp)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Lush Cafe | By the lake </div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Hyderabad <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link href="offers" className="kf-btn">
                    <span>Offers</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(home/banner1.webp)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Lush Cafe | By the lake</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Lake Side
                  <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link href="offers" className="kf-btn">
                    <span>Offers</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
      {/* <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </section>
  );
};
export default MainSlider;

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br rounded-lg w-full max-w-4xl h-1/2 shadow-xl cursor-default relative overflow-hidden"
          >
            <div class="flex bg-gray-900 p-6 rounded-lg h-full shadow-md">
              <div class="w-1/2 mr-4 text-center flex flex-col justify-center">
                <h1 class="text-3xl font-bold text-white">Headline</h1>
                <p class="text-gray-400 mt-4">
                  Please add your content here. Keep it short and simple. And smile :)
                </p>
                <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
                  Offers
                </button>
              </div>
              <img src="/home/popup/sales.jpeg" className="w-1/2 bg-gray-200 rounded-lg" alt="image"/>
            </div>
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence >
  );
};
