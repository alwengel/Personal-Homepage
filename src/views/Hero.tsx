// assets
import alexanderProfilePic from "../assets/Alexander_Profile_Pic.jpg";
import cv from "../assets/Alexander_Engelhardt_CV.pdf"
import githubIcon from "../assets/githubIcon.svg"
import linkedInIcon from "../assets/linkedInIcon.svg"
import outlookIcon from "../assets/outlook.icon.svg"


// components
import { 
  SocialMediaIcon, 
  DownloadButton,
  Reveal, 
  Image, 
  SectionWrapper0 } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";


const Hero = () => {


  return (
    <SectionWrapper0 id="home">
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
        
        <Image 
          src={alexanderProfilePic}
          ImageClassName="max-w-full sm:max-w-[401px] rounded-full block sm:hidden"
        />
        
        <Reveal>
          <div className="my-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 justify-center xl:justify-start text-center">
            <SocialMediaIcon imgSrc={outlookIcon} title="Email" />
            <div className="mb-1 sm:mb-0"><strong>Email:</strong> alexander-engelhardt{"(at)"}outlook.com</div>
          </div>

          <div className="my-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 justify-center xl:justify-start text-center">
            <SocialMediaIcon imgSrc={linkedInIcon} title="LinkedIn" href="https://www.linkedin.com/in/alexander-engelhardt-8940072b0"/>
            <div className="mb-1 sm:mb-0"><strong>LinkedIn:</strong> Alexander Engelhardt</div>
          </div>

          <div className="my-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 justify-center xl:justify-start text-center">
            <SocialMediaIcon imgSrc={githubIcon} title="Github" href="https://github.com/alwengel"/>
            <div className="mb-1 sm:mb-0"><strong>Github:</strong> alwengel</div>
          </div>
        </Reveal>     
      </div>

      <div>
        <div className="flex-1 flex items-center justify-center">
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
      <div>
      <div className="mb-8" />
        <motion.div 
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}}
            className="flex flex-row sm:flex-row items-center gap-6 justify-center">
            
            <DownloadButton 
              file={cv}
              filename="Alexander_Engelhardt_CV.pdf"
              ButtonText="CV"
            />

          </motion.div>
      </div>
      </div>

    </div>

  </SectionWrapper0>
  )
};

export default Hero;
