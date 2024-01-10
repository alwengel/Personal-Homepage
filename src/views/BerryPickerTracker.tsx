// assets

import berryIcon from "../assets/berryPickerTrackerIcon.png"


// components
import { Reveal, YouTubeVideo } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { scale } from "../utils/variants";
import { transition } from "../utils/transition";
import { generateBackgroundSVG } from "../utils/backgroundSVG";

const BerryPickerTracker = () => {

  const svgString = generateBackgroundSVG("#93c47d")

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
      <div className="max-w-screen-2xl  xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

        <motion.div className="text-center xl:text-start">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-textWhite">
              Berry Picker <span className="text-secondary">Tracker</span>
            </h2>
          </Reveal>
        </motion.div>

        <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">

  
        <div className="flex-1 flex flex-col xl:flex-row gap-4">

          
          <div className="flex-1">
            <Reveal>
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={{ color: 'Black' }}>
                The Berry Picker Tracker is a mobile application that lets a person track their position and share it with a selection of people.
                It displays your location on a map and shows the route you have been taking. You can adjust the frequency of location information
                sending to save battery. The application also warns you when you enter an area with low connectivity.

            </p>
          

            <div className="mb-4" />

            <a
                href="https://github.com/marjanpoimijat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left xl:text-start text-base sm:text-lg text-textSecondary"
                style={{ color: '#6fa8dc', textDecoration: 'underline' }}
                >
                Visit the Berry Picker Tracker Github project page.
            </a>




            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                The application was built as a group project for the course Software Engineering Lab at University of Helsinki. Different from many other course
                projects the Berry Picker Tracker appliction is not just a course project, as it is developed for real world usage. The course focuses on
                agile practices and DevOps culture. Our project was a continuation project, meaning that we were faced with the most common senario from
                the real world - trying to understand someone else's code. 
            </p>
          

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                The application is built using Typescript, React Native and Expo. It connects to a Python Fast API Backend where user location data is encrypted 
                and stored. The backend runs in a Docker container which was as of then hosted on a University of Helsinki staging server. We also deployed the
                application using AWS lambda, but due to costs, architectural challenges and time constraints we focused on other features, leaving deployment 
                upgrades to future groups. Another major technical aspect which we undertook was updating several outdated libraries.

            </p>
          

            <div className="mb-4" />

            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary">
                The processes used during the project helped a lot in the development of the application. We started by using a standard scrum set up with sprints
                that lasted for around two weeks. At each client meeting we made sure to display only working features and our client. After the client meeting we
                always held retros using different techniques for discussing what went well and what could be improved upon. We also held dailes to make sure to
                keep everyone up to date. In our group we favoured on-site working, but distance working was freely allowed when needed. In my opinion it was especially
                helpful being on-site in the beginning of the project when we learned to know each other and the group dynamics were formed. 
            </p>

            </Reveal>
          </div>
          
          <div className="flex-1">
            <Reveal>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <motion.img
                variants={scale()}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false}}
                src={berryIcon}
                alt=""
                className="max-w-full sm:max-w-[401px] mb-2" // Reduce bottom margin
                />
                <div className="max-w-md mx-auto"> {/* Container with maximum width */}
                <p className="text-left xl:text-start text-xs sm:text-sm text-textSecondary">
                    Picture 2. The Logo of the berry picker tracker app. An extra thing which I wanted to add to the application was a new logo - so I made one!
                </p>
                </div>

            </div>

            <div className="mb-4" />
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <YouTubeVideo videoId={"KN5oLobccWY"} className="max-w-full" />
                <div className="max-w-md mx-auto"> {/* Container with maximum width */}
                <div className="mb-2"/>
                <p className="text-left xl:text-start text-xs sm:text-sm text-textSecondary">
                    Video 1. Watch a demonstration video our group made at the end of the project</p>
                </div>
            </div>

            </Reveal>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default BerryPickerTracker;
