// assets
import rotatingEarth from "../assets/Rotating_earth.gif";


// components
import { Reveal, 
  ViewTitle, 
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  SectionWrapper4, 
  Paragraph, 
  Image } from "../components";



const Geography = () => {

  return (
    <SectionWrapper0 id="geography" background="#38761d">
      <SectionWrapper1>

        <ViewTitle mainText="Geography: " spanText="A Greater Context"/>

        <SectionWrapper2>
          <SectionWrapper3>   
            <SectionWrapper4>
              <Reveal>        
                <Paragraph>
                  Why do I value geography? It is because no other discipline is as interdisciplinary as geography.
                  Through this lens one can come to understand how mountains turn to sand and how sand turns into high rise buildings.
                  How these buildings can lead to economic wonders or to the collapse of eco-systems. Having this mindset gives 
                  an opportunity to tackle hard questions taking the big picture into consideration. This is increasingly important
                  in all aspects of society as climate change needs to be fought, wars are started over resources and
                  pandemics shut down the whole planet.
                </Paragraph>
            

                <div className="mb-4" />

                <Paragraph>
                  In my geographical studies I have covered everything from classical natural geography where the focus is on
                  analysing how the forces of nature interract and form our planet, to cultural and urban geography where the
                  focus is on human activity and how this interrelates with the natural world. Lastly I have also studies the
                  geographical information systems (GIS), where geography and computer science meet. Geographical data makes
                  up the majority of all data in the world and is expected to grow tremendously in the future.   
                </Paragraph>

              </Reveal>
            </SectionWrapper4>


              <Image 
                src={rotatingEarth}
                className="max-w-full sm:max-w-[401px]"
                description="Picture 1. Spinning right round, right round..."
              />
      
          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default Geography;
