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
                  Throughout my life, I have maintained a continuous interest in the creative arts, encompassing music, writing, photography, film, painting, and more. I initiated my journey into creative expression by learning classical piano at the age of seven. This early exposure included music theory, and although I have since explored various musical forms, the inherent beauty of classical music has remained a constant source of inspiration for me.
                </Paragraph>
      
                <div className="mb-4" />

                <Paragraph>
                  Modern technology has enabled me to pursue my artistic aspirations without compromising my primary career. I have set up a personal studio at home, where the use of virtual instruments opens up limitless possibilities. For instance, I have the BBC Philharmonic Orchestra at my fingertips and can seamlessly blend it with the screaming sounds of an electric guitar. 
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  Some of my current projects are a musical concept album and a semi-professional surrealistic horror comedy film. Outside of these there are countless other projects that I am looking forward to put my full focus on, but to get anything done one needs to channel ones time towards just a few projects at a time.
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
