// assets
import skillCircle from "../assets/AboutMeImage.png"

// components
import { 
  Reveal, 
  ViewTitle,
  ViewTitleSub,
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  Paragraph, 
  Image } from "../components";


const About = () => {

  return (
    <SectionWrapper0 id="about" background="Black">
      <SectionWrapper1>

        <ViewTitle mainText="About" spanText="me" spanColor="#ffd966" />
        
        <SectionWrapper2>
          <SectionWrapper3>

            <div className="flex-1 xl:max-w-[25%]">

              <Reveal>
                <ViewTitleSub header="Interests" />

                <div className="mb-4" />

                <Paragraph>
                  Hi, my name is Alexander Engelhardt. I have a wide range of interests, spanning from philosophy and history to arts and technology. I am currently pursuing a PhD in Computer Science at the University of Helsinki within the Research-to-Business project AgentFormers. The focus of my PhD is infusing artificial intelligence into distributed environment communication to enable complex-event processing. Additionally, I have a background in Full-Stack web development, and a minor in geography which includes physical geography, urban planning, and geographical information systems.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  Outside of my studies, I have a strong interest in various forms of art. Currently, I am completing my first musical concept album, which encapsulates my experiences in music and the world up to this point. The album combines elements of pop, rock, jazz, classical, hip-hop, and ambient music. Additionally, I am involved in directing and screenwriting a semi-professional surrealistic horror comedy film, set to release sometime this year.
                </Paragraph>

              </Reveal>
            </div>
        
            <Image 
              src={skillCircle}
              positionClassName="flex-1 flex flex-col"
              ImageClassName="max-h-full max-w-full"
            />

            <div className="flex-1 xl:max-w-[25%]"> {/* Adjust the max-width as needed */}
              <Reveal>
                <ViewTitleSub header="Personality" />

                <div className="mb-4" />

                <Paragraph>
                  As a person, I am driven by my
                  desire to create. I love nothing
                  more than to concentrate on a
                  project, striving to make it the
                  best it can be. The only thing
                  better is to do the same with
                  other like minded people.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  In group projects I often find myself in creative- and organizing leadership positions. I believe that the key to effective leadership lies in the balance between empathy and discipline.
                  It needs to be clear that agreements are expected to hold. At the same time a good leader is also a good servant. I interpret this old saying to mean that a good leader reaches his goals by empowering each team member to reach their own personal best potential.
                  This aligns with the wisdom of Lao Tzu:
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  <i>
                    "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."
                  </i>
                </Paragraph>

              </Reveal>
            </div>
            </SectionWrapper3>
          </SectionWrapper2>

        </SectionWrapper1>
      </SectionWrapper0>
  );
}

export default About;
