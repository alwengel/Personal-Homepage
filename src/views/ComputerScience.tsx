// assets
import alexandersComputerSetUp from "../assets/Alexanders_Computer_Set_up_2024.jpg";


// components
import { 
  Reveal, 
  ViewTitle, 
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  SectionWrapper4, 
  Paragraph, 
  Image } from "../components";


const ComputerScience = () => {

  return (
    <SectionWrapper0 id="computer-science" background="#64c6c7">
      <SectionWrapper1>

        <ViewTitle mainText="Computer" spanText="Science" />

      <SectionWrapper2>
        <SectionWrapper3>          
          <SectionWrapper4>
            <Reveal>        
              <Paragraph>
                Just a few years ago, I wouldn't have imagined that I would develop a passion for computer science. While I consistently performed well in all school subjects, I initially believed my true calling lay in the arts, people skills, and big-picture thinking. During my time in upper secondary school, I seriously contemplated pursuing a career as a musician. However, as I prepared for the final exams, particularly in Geography, I noticed that my enhanced understanding of the world brought greater depth and meaning to my artistic endeavors. This realization prompted me to apply for and subsequently be accepted into the bachelor's degree program in geography.
              </Paragraph>

              <div className="mb-4" />

              <Paragraph>
                Then how come I have ended up studying Computer Science? The answer to this is that during my studies of geography, I found myself appreciating the technical courses the most, as I felt that these gave me the most valuable and tangible skills. This culminated in me switching from the bachelor's program in geography to the bachelor's program in computer science. Ever since, I have felt that computer science has contributed to my personal growth, where I not only possess a keen artistic eye and the big-picture analytical thinking that geography entails, but also robust technical insight.
              </Paragraph>

              <div className="mb-4" />

              <Paragraph>
                Scroll down this page to read about some of my projects or other works related to computer science. 
              </Paragraph>
            </Reveal>
          </SectionWrapper4>

            <Image 
              src={alexandersComputerSetUp} 
              ImageClassName="max-w-full sm:max-w-[401px]"
              border={true}
              description="Picture 1. Me and my desktop set up."
            />

          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default ComputerScience;
