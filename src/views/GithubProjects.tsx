// assets

import berryIcon from "../assets/ManuliProfilePic.png"


// components
import { Reveal, YouTubeVideo } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const GithubProjects = () => {
    const svgString = generateBackgroundSVG("#5c7294");
  
    return (
      <div
        id="berry-picker-tracker"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-2xl xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
  
          <motion.div className="text-center xl:text-start">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-textWhite">
                Other <span className="text-secondary">CS</span> Projects
              </h2>
            </Reveal>
          </motion.div>
  
          <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">
            <div className="flex-1 flex flex-col xl:flex-row gap-4">
                <div className="flex-1 max-w-[700px]">
                <Reveal>
                    <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={{ color: 'Black' }}>
                    As this webpage is quite new I still have not had time to create specific views for the majority of my projects. This page links to some of the projects found at my Github account.
                    </p>
                    <div className="mb-4" />
                    <div className="flex items-center">
                    <a
                        href="https://github.com/marjanpoimijat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left xl:text-start text-base sm:text-lg text-textSecondary"
                        style={{ color: '#6fa8dc', textDecoration: 'underline' }}
                    >
                        Visit my Github page by clicking this link.
                    </a>
                    <div className="ml-4">
                        <motion.img
                        variants={scale()}
                        transition={transition()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        src={berryIcon}
                        alt=""
                        className="max-w-full sm:max-w-[50px] rounded-full"
                        />
                    </div>
                    </div>
                </Reveal>
                </div>
            </div>
            </div>

  
          {/* New Row Starts Here */}
          <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">
            <div className="flex-1 flex flex-col xl:flex-row gap-4">
  
              <div className="flex-1">
                <Reveal>
                  <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                    <span className="text-secondary">Course-Website</span>
                  </h3>
                </Reveal>
              </div>
  
              {/* Personality */}
              <div className="flex-1">
                <Reveal>
                  <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                    <span className="text-secondary">Bismarck</span>
                  </h3>
                </Reveal>
              </div>
  
              <div className="flex-1">
                <Reveal>
                    <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                        <span className="text-secondary">Full-Stack Application</span>
                     </h3>
                </Reveal>
              </div>
            </div>
          </div>
          {/* New Row Ends Here */}
  
        </div>
      </div>
    );
  };
  
  export default GithubProjects;
  