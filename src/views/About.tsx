// assets
import skillCircle from "../assets/AboutMeImage.png"

// components
import { 
  Reveal, 
  ViewTitle,
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
                <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                  Interests
                </h3>

                <div className="mb-4" />

                <Paragraph>
                  Hi, my name is Alexander Engelhardt. I have a wide set of interests ranging from philosophy and history to arts and technology.
                  I am studying the Master's Programme in Computer Science at the University of Helsinki with a focus on Software Architecture,
                  Distributed Systems, and Full Stack Development. I also have a minor in geography entailing natural geography, urban planning, and geographical information systems.
                </Paragraph>
                <div className="mb-4" />

                <Paragraph>
                  Outside of my studies, I have a strong interest in several forms of art. I am currently finishing my first musical concept album which
                  embodies my experiences in music and of the world up to this point, mixing pop, rock, jazz, classical, hip hop and ambience. I am also directing/screenwriting a
                  semi-professional surrealistic horror comedy film which is set to release sometime this year.
                </Paragraph>

              </Reveal>
            </div>

            <Image src={skillCircle} className="max-h-full max-w-full"/>

            <div className="flex-1 xl:max-w-[25%]"> {/* Adjust the max-width as needed */}
              <Reveal>
                <h3 className="text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-textWhite">
                  Personality
                </h3>

                <div className="mb-4" />

                <Paragraph>
                  As a person, I am driven by my will to create. I love nothing more than to focus on a product, making it the best it can be. This shows in my long history of always having some project going on.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  Besides creativity, I love working together with other people. In projects, I often find myself in leadership positions due to idea richness coupled with strong communication skills. I have found 
                  the key to good leadership to be balancing between being assertive while never forsaking the humbleness of listening to other people and reaching group decisions. Another perspective on leadership 
                  that I like is that a good leader is also a good servant. What I take from this saying is that a good leader achieves the best outcome by enabling team members to reach their own best potential.
                  This also goes along with the quote of Lao Tzu:
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
