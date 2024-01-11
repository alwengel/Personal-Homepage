// assets
import skillCircle from "../assets/AboutMeImage.png"

// components
import { Reveal, ViewTitle } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils

import { generateBackgroundSVG } from "../utils/backgroundSVG";


const About = () => {

  const svgString = generateBackgroundSVG("#Midnight")

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

        <ViewTitle mainText="About" spanText="me" spanColor="#ffd966" />

        <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">
          <div className="flex-1 flex flex-col xl:flex-row gap-4">
            <div className="flex-1 xl:max-w-[25%]"> {/* Adjust the max-width as needed */}
              <Reveal>
                <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                  Interests
                </h3>

                <div className="mb-4" />

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

              </Reveal>
            </div>

            <div className="flex-1 xl:max-w-[50%]"> {/* Adjust the max-width as needed */}
              <Reveal>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                src={skillCircle}
                alt=""
                className="max-h-full max-w-full"
              />

              </Reveal>
            </div>

            <div className="flex-1 xl:max-w-[25%]"> {/* Adjust the max-width as needed */}
              <Reveal>
                <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                  Personality
                </h3>

                <div className="mb-4" />

                <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                  As a person, I am driven by my will to create. I love nothing more than to focus on a product, making it the best it can be. This shows in my long history of always having some project going on.
                </p>
                <div className="mb-4" />
                <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                  Besides creativity, I love working together with other people. In projects, I often find myself in leadership positions due to idea richness coupled with strong communication skills. I have found the key to good leadership to be balancing between being assertive while never forsaking the humbleness of listening to other people and reaching group decisions.

                  Another perspective on leadership that I like is that a good leader is also a good servant. What I take from this saying is that a good leader achieves the best outcome by enabling team members to reach their own best potential. This also goes along with the quote of Lao Tzu:
                </p>
                <div className="mb-4" />
                <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                  <i>
                    "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."
                  </i>
                </p>

              </Reveal>
            </div>
          </div>
        </div>

    </div>
    </div>
  );
}

export default About;
