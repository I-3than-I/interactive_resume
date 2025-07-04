import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/cloud-security.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
            Ethan Kuchta
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Cybersecurity enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <figure>
              <img
                className="rounded-2xl"
                src={profilePic}
                alt="Cloud Security - Secure Data - Cyber Security"
              />
              <figcaption className="text-xs">
                  <a
                    title="Blue Coat Photos, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via flickr"
                    href="https://www.bluecoat.com/"
                    className="border-b">
                      Image Credits
                  </a>
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
