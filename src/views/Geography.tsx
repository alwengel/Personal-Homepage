// assets
import rotatingEarth from "../assets/Rotating_earth.gif";


// components
import { Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";


const About = () => {

  const svgString = generateBackgroundSVG("#38761d")

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
              Geography: <span className="text-secondary">Big Picture Thinking</span>
            </h2>
          </Reveal>
        </motion.div>

      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

  
        <div className="flex-1 flex flex-col xl:flex-row gap-4">

          
          <div className="flex-1">
            <Reveal>        
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Why do I value geography? It is because no other discipline is as interdisciplinary as geography.
              Through this lens one can come to understand how mountains turn to sand and how sand turns into high rise buildings.
              How these buildings can lead to economic wonders or to the collapse of eco-systems. Having this mindset gives 
              an opportunity to tackle hard questions taking the big picture into consideration. This is increasingly important
              in all aspects of society as climate change needs to be fought, wars are started over resources and
              pandemics shut down the whole planet.

            </p>
          

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              In my geographical studies I have covered everything from classical natural geography where the focus is on
              analysing how the forces of nature interract and form our planet, to cultural and urban geography where the
              focus is on human activity and how this interrelates with the natural world. Lastly I have also studies the
              geographical information systems (GIS), where geography and computer science meet. Geographical data makes
              up the majority of all data in the world and is expected to grow tremendously in the future.   
            </p>

            </Reveal>
          </div>
          <div className="flex-1">
            <div className="flex-1 flex items-center justify-center">
              <motion.img
                variants={scale()}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false}}
                src={rotatingEarth}  // Replace with the actual path to your gif file
                alt="Rotating Earth"
                className="max-w-full sm:max-w-[401px]" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
