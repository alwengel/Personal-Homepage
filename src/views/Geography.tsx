// assets
import rotatingEarth from "../assets/Rotating_earth.gif";


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
                  Why do I value geography? It is because no other discipline is as interdisciplinary as geography. Through this lens, one can come to understand how mountains turn to sand and how sand turns into high-rise buildings. These buildings, in turn, can lead to economic wonders or the collapse of ecosystems. Adopting this mindset provides an opportunity to tackle challenging questions while considering the big picture. This is increasingly important in all aspects of society, as climate change needs to be addressed, wars are started over resources, and pandemics can shut down the entire planet.
                </Paragraph>
            
                <div className="mb-4" />

                <Paragraph>
                  In my geographical studies, I have covered everything from classical natural geography, where the focus is on analyzing how the forces of nature interact and form our planet, to cultural and urban geography, where the focus is on human activity and its interrelation with the natural world. Lastly, I have also studied geographical information systems (GIS), where geography and computer science intersect. Geographical data constitutes the majority of all data in the world and is expected to grow tremendously in the future.
                </Paragraph>

              </Reveal>
            </SectionWrapper4>


              <Image 
                src={rotatingEarth}
                ImageClassName="max-w-full sm:max-w-[401px]"
                description="Picture 1. Spinning right round, right round..."
              />
      
          </SectionWrapper3>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default Geography;
