// asse
// components
import { Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const About = () => {

  const svgString = generateBackgroundSVG("#3fba23")

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl  xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

        <motion.div className="text-center xl:text-start">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-textWhite">
              About <span className="text-secondary">me</span>
            </h2>
          </Reveal>
        </motion.div>

      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

  
        {/* Three Columns */}
        <div className="flex-1 flex flex-col xl:flex-row gap-4">
          {/* Studies */}
          <div className="flex-1">
            <Reveal>
              <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                <span className="text-secondary">Studies</span>
              </h3>
            </Reveal>
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Hi, my name is Alexander Engelhardt. I have a wide set of interests ranging from philosophy and history to arts and technology.
              I am studying the Master's Programme in Computer Science at the University of Helsinki with a focus on Software Architecture,
              Distributed Systems, and Full Stack Development. I also have a minor in geography entailing natural geography, urban planning, and geographical information systems.
            </p>
          </div>
  
          {/* Arts & Design */}
          <div className="flex-1">
            <Reveal>
              <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                <span className="text-secondary">Arts & Design</span>
              </h3>
            </Reveal>
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Outside of my studies, I have a strong interest in several forms of art. I am currently finishing my first musical concept album which
              embodies my experiences in music and of the world up to this point, mixing pop, rock, jazz, classical, hip hop and ambience. I am also directing/screenwriting a
              semi-professional surrealistic horror comedy film which is set to release sometime this year.
            </p>
          </div>
  
          {/* Personality */}
          <div className="flex-1">
            <Reveal>
              <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                <span className="text-secondary">Personality</span>
              </h3>
            </Reveal>
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Hi, my name is Alexander Engelhardt. I have a wide set of interests ranging from philosophy and history to arts and technology.
              I am studying the Master's Programme in Computer Science at the University of Helsinki with a focus on Software Architecture,
              Distributed Systems, and Full Stack Development. I also have a minor in geography entailing natural geography, urban planning, and geographical information systems.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
