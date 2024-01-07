// assets
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const Contact = () => {

  const svgString = generateBackgroundSVG("#6fa8dc")

  return (
  <div
    id="contact"
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
        items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12 "
    >

        <div className="flex-1 flex flex-col gap-4">
        <Reveal>
        <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textWhite">
            Got a projet in<span className="text-secondary"> mind?</span>
          </h2>
          </Reveal>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          src={contactIllustration} alt="" className="max-h-[348px]"/>
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="flex-1 flex flex-col gap-6 max-w-[696px]">

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput labelText="Your name" placeholderText="name"/>
            <LabelInput labelText="Your email" placeholderText="email"/>
          </div>

          <div className="flex flex-col sm:flex.row items-center gap-6">
            <LabelInput 
              labelText="Your message" 
              placeholderText="Message"
              textarea/>
          </div>

          <Button secondary>Send message</Button>
        </motion.div>
      </div>
  </div>
  )
};

export default Contact;
