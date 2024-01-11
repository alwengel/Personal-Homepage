// assets

import berryIcon from "../assets/berryPickerTrackerIcon.png"


// components
import { 
  Reveal, 
  YouTubeVideo, 
  ViewTitle,
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  SectionWrapper4, 
  Paragraph, 
  Image, 
  Link} from "../components";




const BerryPickerTracker = () => {

  return (
    <SectionWrapper0 id="berry-picker-tracker" background="#93c47d">
      <SectionWrapper1>

        <ViewTitle mainText="Berry Picker" spanText="Tracker" />

        <SectionWrapper2>
          <SectionWrapper3>

            <SectionWrapper4>
              <Reveal>
                <Paragraph style={{ color: 'Black' }}>
                    The Berry Picker Tracker is a mobile application that lets a person track their position and share it with a selection of people.
                    It displays your location on a map and shows the route you have been taking. You can adjust the frequency of location information
                    sending to save battery. The application also warns you when you enter an area with low connectivity.
                </Paragraph>
              

                <div className="mb-4" />

                <Link 
                  href="https://github.com/marjanpoimijat"
                  linkString="Visit the Berry Picker Tracker Github project page."
                />

                <div className="mb-4" />

                <Paragraph>
                    The application was built as a group project for the course Software Engineering Lab at University of Helsinki. Different from many other course
                    projects the Berry Picker Tracker appliction is not just a course project, as it is developed for real world usage. The course focuses on
                    agile practices and DevOps culture. Our project was a continuation project, meaning that we were faced with the most common senario from
                    the real world - trying to understand someone else's code. 
                </Paragraph>
              
                <div className="mb-4" />

                <Paragraph>
                    The application is built using Typescript, React Native and Expo. It connects to a Python Fast API Backend where user location data is encrypted 
                    and stored. The backend runs in a Docker container which was as of then hosted on a University of Helsinki staging server. We also deployed the
                    application using AWS lambda, but due to costs, architectural challenges and time constraints we focused on other features, leaving deployment 
                    upgrades to future groups. Another major technical aspect which we undertook was updating several outdated libraries.

                </Paragraph>
              
                <div className="mb-4" />

                <Paragraph>
                    The processes used during the project helped a lot in the development of the application. We started by using a standard scrum set up with sprints
                    that lasted for around two weeks. At each client meeting we made sure to display only working features and our client. After the client meeting we
                    always held retros using different techniques for discussing what went well and what could be improved upon. We also held dailes to make sure to
                    keep everyone up to date. In our group we favoured on-site working, but distance working was freely allowed when needed. In my opinion it was especially
                    helpful being on-site in the beginning of the project when we learned to know each other and the group dynamics were formed. 
                </Paragraph>
              </Reveal>
            </SectionWrapper4>
            
            <SectionWrapper4>
              <Reveal>
                <Image 
                  src={berryIcon}
                  ImageClassName="max-w-full sm:max-w-[401px] mb-2"
                  description="Picture 2. The Logo of the berry picker tracker app. An extra thing which I wanted to add to the application was a new logo - so I made one!"
                />

                <div className="mb-4" />
                
                <YouTubeVideo 
                  videoId={"KN5oLobccWY"}
                  className="max-w-full"
                  description="Video 1. Watch a demonstration video our group made at the end of the project"
                />

              </Reveal>
            </SectionWrapper4>

          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default BerryPickerTracker;
