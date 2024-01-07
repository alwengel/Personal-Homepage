// assets
import alexanderProfilePic from "../assets/Alexander_Profile_Pic.jpg";
import downloadIcon from "../assets/download-btn-icon.svg";
import cv from "../assets/Alexander_Engelhardt_CV.pdf"

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { downloadFile } from "../utils/download";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const Hero = () => {

  const svgString = generateBackgroundSVG("White")

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
      }}
    >
    <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl.items-start gap-12 w-full py-16 px-12">
      <div className="w-full xl:w-fit">
        <motion.h1 
          variants={fadeIn("down")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="w-full xl:w-fit text-center xl:text-start text-3xl sm:text-6xl lg:text-6xl
            font-bolt text-textPrimary"
        >
          Alexander Engelhardt
          <br />
          <span className="text-secondary">
            <Typewriter 
              words={["Earth, Technology, Arts"]}
              cursor
              cursorStyle=""
              typeSpeed={150}
            ></Typewriter>
          </span> 
        </motion.h1>

        <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}}
            src={alexanderProfilePic}
            alt=""
            className="max-w-full sm:max-w-[401px] rounded-full block sm:hidden"
          />
          <motion.div 
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button>Hire me</Button>
            <Button
              icon={downloadIcon}
              onClick={() => downloadFile({ fileUrl: cv, fileName: 'Alexander_Engelhardt_CV.pdf' })}
              >
              Download CV
            </Button>
          </motion.div>

        </div>
        
      </div>
      <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}}
            src={alexanderProfilePic}
            alt=""
            className="max-w-full sm:max-w-[401px] rounded-full hidden sm:block"
          />
    </div>
  </div>
  )
};

export default Hero;
