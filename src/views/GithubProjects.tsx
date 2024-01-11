// assets

import githubProfilePic from "../assets/ManuliProfilePic.png"
import babyAndUniverse from "../assets/BabyAndUniverse.png"
import bismarck from "../assets/Bismarck.png"
import mern from "../assets/Mern.png"



// components
import { 
  Reveal, 
  ViewTitle,
  ProjectQuickLook,
  SectionWrapper0, 
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  Image, 
  Link } from "../components";


const GithubProjects = () => {

  
    return (
      <SectionWrapper0 id="github-projects" background="#5c7294">
        <SectionWrapper1>

          <ViewTitle mainText="Some other" spanText="Projects"/>
  
          <SectionWrapper2>
            <SectionWrapper3>
                <div className="flex-1 max-w-[700px]">
                <Reveal>
                    <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={{ color: 'Black' }}>
                    As this webpage is quite new I still have not had time to create specific views for the majority of my projects. This page links to some of the projects found at my Github account.
                    </p>

                    <div className="mb-4" />

                    <div className="flex items-center">
                      <Link 
                        href="https://github.com/Catrovitch"
                        linkString="Visit my Github page by clicking this link" 
                      />
                      <div className="ml-4">
                          <Image src={githubProfilePic} ImageClassName="max-w-full sm:max-w-[50px] rounded-full" />
                      </div>
                    </div>
                </Reveal>
                </div>
            </SectionWrapper3>
          </SectionWrapper2>

          <SectionWrapper2>
            <SectionWrapper3>

              <ProjectQuickLook 
                projectName="Course-Website"
                projectLink="https://online-course-website.fly.dev/"
                projectLinkString="here." 
                projectImageSrc={babyAndUniverse}
              >
                This web application lays the ground for an online course library where one can learn various subjects. 
                It follows a traditional web application structure using HTML and CSS in the frontend coupled with a 
                Python-managed PostgreSQL backend. The application is built using Flask and is hosted on Fly.io. Visit the webpage {" "}
              </ProjectQuickLook>

              <ProjectQuickLook
                projectName="Bismarck"
                projectImageSrc={bismarck}
                projectLink="https://github.com/Catrovitch/Bismarck"
              >
                Bismarck is a classic card game which is played between two players each striving to defeat the other through strategy and careful planning.
                It is a desktop application built using Python and Pygame. This was my first programming project using Github, and the focus was on 
                good practices over fancy graphics and complex mechanics.
              </ProjectQuickLook>

              <ProjectQuickLook
                projectName="Full-Stack Open"
                projectImageSrc={mern}
                projectLink="https://fullstackopen.com/en/#course-contents"
                projectLinkString="here"
              >
                This repository contains various projects related to the valued course Full-Stack Open at University of Helsinki. The topics of the course
                ranges from basic JavaScript and Node.js to full end-to-end testing, containerization and
                continuous development. For greater detail about the visit the Full-Stack Open course webpage {" "}
              </ProjectQuickLook>

            </SectionWrapper3>
          </SectionWrapper2>  
        </SectionWrapper1>
      </SectionWrapper0>
    );
  };
  
  export default GithubProjects;
  