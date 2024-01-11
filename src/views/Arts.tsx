// assets
import MusicPic from "../assets/Music_Picture.jpg";


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



const Arts = () => {

  return (
    <SectionWrapper0 id="arts" background="#aa8000" >
      <SectionWrapper1>

        <ViewTitle mainText="Arts" mainColor="black"/>

        <SectionWrapper2>
          <SectionWrapper3>
            <SectionWrapper4>
              <Reveal>        
                <Paragraph>
                  During my whole life I have always been interested in creative arts, be it music, writing, photography
                  film, painting or something else. I started playing the classical piano at age seven. This included music
                  theory and though I have since experimented with various forms of music the core beauty of classical music
                  has always stuck with me.  
                </Paragraph>
      
                <div className="mb-4" />

                <Paragraph>
                  Modern technology has allowed me to approach my artistic goals without sacrificing my main career.
                  At home I have my own little studio and using virtual instruments the sky is the limit. For example,
                  at my fingertips I have the possibility of commanding the BBC philharmonic orchestra, combining it with
                  the sceraming sounds of my electric guitar.  
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  Some of my current projects are a musical concept album and a semi-professional surrealistic horror comedy film. 
                </Paragraph>

              </Reveal>
            </SectionWrapper4>
            <SectionWrapper4>

              <Image 
                src={MusicPic}
                ImageClassName="max-w-full sm:max-w-[401px]"
                description="Picture 1. Me and my cat"
                border={true}
              />

            </SectionWrapper4>
          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default Arts;
