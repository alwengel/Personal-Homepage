// assets
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const Arts = () => {

  const svgString = generateBackgroundSVG("#aa8000")

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
    <div 
      className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full py-16 px-12"
    >
      <div className="flex-1 flex flex-col gap-4">
        <Reveal>
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textWhite">
            Arts: <span className="text-secondary"> Music, Film, and Much More</span>
          </h2>
        </Reveal>

        <Reveal>        
        <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
          Hi, my name is Alexander Engelhardt. I have a wide set of interests ranging from philosophy and history to arts and technology. 
          I am studying the Master's Programme in Computer Science at the University of Helsinki with a focus on Software Architecture, 
          Distributed Systems, and Full Stack Development. I also have a minor in geography entailing natural geography, urban planning, and geographical information systems.
        </p>

        <div className="mb-4" />

        <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
          Outside of my studies, I have a strong interest in several forms of art. I am currently finishing my first musical concept album which 
          embodies my experiences in music and of the world up to this point, mixing pop, rock, jazz, classical, hip hop and ambience. I am also directing/screenwriting a 
          semi-professional surrealistic horror comedy film which is set to release sometime this year. 
        </p>

        <div className="mb-4" />

        <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
          My love for the arts is perhaps counter-intuitively reflected 
          in my computer science studies in that I have consciously chosen to focus on some of the most technical aspects of computer science, 
          as I feel that my keen artistic eye gives me a natural affinity for the less technical aspects.    
        </p>


        </Reveal>
        <motion.div 
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="flex items-center justify-center xl:justify-start gap-6">
          <SocialMediaIcon imgSrc={facebookIcon} title="Facebook"></SocialMediaIcon>
          <SocialMediaIcon imgSrc={instagramIcon} title="Instagram"></SocialMediaIcon>
          <SocialMediaIcon imgSrc={twitterIcon} title="Twitter"></SocialMediaIcon>
          <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube"></SocialMediaIcon>
        </motion.div>

  
      </div>
      <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>  
      </div>
    </div>
   )
  };

export default Arts;
