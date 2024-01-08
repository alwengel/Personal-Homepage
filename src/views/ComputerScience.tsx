// assets
import alexandersComputerSetUp from "../assets/Alexanders_Computer_Set_up_2024.jpg";


// components
import { Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";


const About = () => {

  const svgString = generateBackgroundSVG("#00c0b2")

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
              Computer <span className="text-secondary">Science</span>
            </h2>
          </Reveal>
        </motion.div>

      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

  
        <div className="flex-1 flex flex-col xl:flex-row gap-4">

          
          <div className="flex-1">
            <Reveal>        
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Just some years ago I would not have seen myself loving computer science. Though I had always faired well in all subjects in school
              I used to feel that my true calling was in arts, people skills and big picture thinking. In upper secondary school I seriously considered 
              a career as a musician. When studying for the final exams and more specifically Geography, I noticed how I noticed how my increased
              understanding of the world also led to greater meaning in my artistic works. This led to me applying and getting accepted to the bachelor's 
              degree in geography.

            </p>
          

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Then how come I have ended up studying Computer science? The answer to this is that during my studies of geography I found my self appriciating the
              technical courses the most as I felt that these gave me the most valuable and tangible skills. This culminated in me switching from the bachelor's 
              programme in geography to the bachelor's programme in computer science. Ever since I have felt that computer science has given growth to my 
              character where I not only posess a keen artistic eye, big picture analytical thinking that geography entails, but also robust technical insight.
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
                src={alexandersComputerSetUp}
                alt=""
                className="max-w-full sm:max-w-[401px]"
                style={{ border: '2px solid #333' }}
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
