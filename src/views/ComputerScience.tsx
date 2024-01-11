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
                Just some years ago I would not have seen myself loving computer science. Though I had always faired well in all subjects in school
                I used to feel that my true calling was in arts, people skills and big picture thinking. In upper secondary school I seriously considered 
                a career as a musician. When studying for the final exams and more specifically Geography, I noticed how I noticed how my increased
                understanding of the world also led to greater meaning in my artistic works. This led to me applying and getting accepted to the bachelor's 
                degree in geography.
              </Paragraph>

              <div className="mb-4" />

              <Paragraph>
                Then how come I have ended up studying Computer science? The answer to this is that during my studies of geography I found my self appriciating the
                technical courses the most as I felt that these gave me the most valuable and tangible skills. This culminated in me switching from the bachelor's 
                programme in geography to the bachelor's programme in computer science. Ever since I have felt that computer science has given growth to my 
                character where I not only posess a keen artistic eye, big picture analytical thinking that geography entails, but also robust technical insight.
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
              description="Picture 1. Me and my set up."
            />

          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default ComputerScience;
