import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <figure>
              <img
                className="rounded-2xl"
                width="1024"
                alt="Server racks at the NOIRLab Headquarters Computer Server Room in Tucson, Arizona."
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NOIRLab_HQ_Server_Racks_%286V6A0395-CC%29.jpg/1024px-NOIRLab_HQ_Server_Racks_%286V6A0395-CC%29.jpg?20230709233425"
              />
              <figcaption className="text-xs">
                <a
                  title="NOIRLab/NSF/AURA/T. Slovinský, CC BY 4.0 &lt;https://creativecommons.org/licenses/by/4.0&gt;, via Wikimedia Commons"
                  href="https://commons.wikimedia.org/wiki/File:NOIRLab_HQ_Server_Racks_(6V6A0395-CC).jpg"
                  className="border-b">
                    Image Credits
                </a>
              </figcaption>
            </figure>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
