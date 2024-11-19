"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className={`preloader ${loaded ? "hidden" : ""}`}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 "
        initial={{ opacity: 1 }} // Start fully opaque
        animate={{ opacity: loaded ? 0 : 1 }} // Fade out when loaded is true
        transition={{ duration: 0.7 }} // Smooth transition duration
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center"
        >
          <Image src="/Logo/logo.svg" alt="Loading Logo" width={500} height={500} />
        </motion.div>
      </div>
    </div>
  );
};
export default Preloader;
