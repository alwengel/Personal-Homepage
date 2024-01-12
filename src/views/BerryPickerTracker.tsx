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
                  The Berry Picker Tracker is a mobile application designed to enable users to track their position and share it with a chosen group of individuals. The app displays the user's location on a map, showcasing the route they have taken. Users have the flexibility to adjust the frequency of location information updates to conserve battery life. Additionally, the application provides warnings when entering areas with low connectivity.
                </Paragraph>
              

                <div className="mb-4" />

                <Link 
                  href="https://github.com/marjanpoimijat"
                  linkString="Visit the Berry Picker Tracker Github project page."
                />

                <div className="mb-4" />

                <Paragraph>
                  The Berry Picker Tracker application was developed as a group project for the Software Engineering Lab course at the University of Helsinki. Distinguished from many other course projects, the Berry Picker Tracker is not solely an academic exercise; it is crafted for real-world usage. The course emphasizes agile practices and the DevOps culture. Our project was structured as a continuation project, mirroring a common scenario in the real world where developers are tasked with comprehending and building upon someone else's existing codebase.
                </Paragraph>
              
                <div className="mb-4" />

                <Paragraph>
                  The application is developed using Typescript, React Native, and Expo. It establishes a connection to a Python Fast API Backend, where user location data is encrypted and stored securely. The backend operates within a Docker container, which, at the time, was hosted on a University of Helsinki staging server. In addition to this, we deployed the application using AWS Lambda. However, due to cost considerations, architectural challenges, and time constraints, we prioritized other features, leaving deployment upgrades for future development groups.
                  Another significant technical aspect we addressed involved updating several outdated libraries within the application.
                </Paragraph>
              
                <div className="mb-4" />

                <Paragraph>
                  The project benefitted significantly from the processes we implemented during its development. Initially, we adopted a standard Scrum setup with sprints lasting approximately two weeks. During client meetings, we ensured to showcase only functional features to our client. Following each client meeting, we conducted retrospectives using various techniques to discuss both successes and areas for improvement. Daily check-ins were also held to keep everyone updated on the project's progress. While our group generally favored on-site collaboration, we allowed for distance working when necessary. Personally, I found being on-site particularly beneficial in the project's early stages, facilitating team bonding and the establishment of group dynamics.
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
