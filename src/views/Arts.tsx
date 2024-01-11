// assets
import MusicPic from "../assets/Music_Picture.jpg";


// components
import { Reveal, ViewTitle } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";


const Arts = () => {

  const svgString = generateBackgroundSVG("#aa8000")

  return (
    <div
      id="arts"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl  xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

        <ViewTitle mainText="Arts" mainColor="black"/>

      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">

  
        <div className="flex-1 flex flex-col xl:flex-row gap-4">

          
          <div className="flex-1">
            <Reveal>        
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              During my whole life I have always been interested in creative arts, be it music, writing, photography
              film, painting or something else. I started playing the classical piano at age seven. This included music
              theory and though I have since experimented with various forms of music the core beauty of classical music
              has always stuck with me.  

            </p>
            

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Modern technology has allowed me to approach my artistic goals without sacrificing my main career.
              At home I have my own little studio and using virtual instruments the sky is the limit. For example,
              at my fingertips I have the possibility of commanding the BBC philharmonic orchestra, combining it with
              the sceraming sounds of my electric guitar.  
            </p>

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
              Some of my current projects are a musical concept album and a semi-professional surrealistic horror comedy film. 
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
                src={MusicPic}
                alt=""
                className="max-w-full sm:max-w-[401px]"
                style={{ border: '2px solid #333' }} // Add this line for the border
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Arts;
