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
                  Hi, my name is Alexander Engelhardt. I have a wide range of interests, spanning from philosophy and history to arts and technology. I am currently studying the Master's Programme in Computer Science at the University of Helsinki, with a focus on Software Architecture, Distributed Systems, and Full Stack Development. Additionally, I have a minor in geography, which includes natural geography, urban planning, and geographical information systems.
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
                  As a person, I am driven by my desire to create. I love nothing more than to concentrate on a project, striving to make it the best it can be. This passion is evident in my extensive history of consistently having various projects in progress.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                Besides creativity, I thoroughly enjoy collaborating with others. In various projects, I often find myself in leadership positions, a result of a combination of innovative ideas and effective communication skills. I believe that the key to effective leadership lies in maintaining a balance between assertiveness and the humility to listen to others, fostering a collaborative decision-making process within the group.
                Another perspective on leadership that resonates with me is the idea that a good leader is also a good servant. I interpret this concept to mean that effective leadership involves empowering team members to reach their fullest potential. This aligns with the wisdom of Lao Tzu, who emphasized the following quote:
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
