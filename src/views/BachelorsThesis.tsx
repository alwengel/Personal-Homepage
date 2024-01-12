// assets
import bachelorFrontPage from "../assets/BachelorFrontPage.png"
import thesis from "../assets/Alexander-Engelhardt-Thesis.pdf"


// components
import { 
  Reveal, 
  DownloadButton,
  ViewTitle, 
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper4, 
  Paragraph, 
  Image } from "../components";



const BachelorsThesis = () => {


  return (
    <SectionWrapper0 id="BachelorsThesis" background="#A9978B" >
      <SectionWrapper1>

        <ViewTitle mainText="Bachelor's" spanText="Thesis"/>

        <SectionWrapper2>
            <SectionWrapper4>
              <Reveal>
              <Paragraph style={{ color: 'Black' }}>
                With the guidance of my supervisor, Docent Jeremias Berg, I iteratively worked on the thesis. Ultimately, 
                I crafted a compelling text that earned me the highest possible grade. The somewhat stringent criteria for 
                the thesis writing process provided a stimulating challenge, allowing me to push my limits. Given my enduring 
                love for writing, the entire thesis-writing journey was an enjoyable experience for me. I made a conscious 
                effort to ensure that the thesis is as understandable and enjoyable to read as possible, catering to individuals 
                without expert knowledge in the field. If you are interested, you can download the thesis by clicking the download 
                button below the picture.
              </Paragraph>

              <div className="mb-4" />

              <Paragraph>
                The topic of my bachelor's thesis explores the substantial structural differences between Monolithic and Microservice
                architectures and their profound impact on achievable outcomes in software development. Specifically, the thesis 
                compares how these two architectural approaches differ in their performance, scalability with increasing user numbers, 
                deployment capabilities, and cybersecurity aspects. The selection of these qualities is based on their significance 
                in the specific context of comparing Monolithic and Microservice architectures. Additionally, each of these qualities 
                holds individual importance and plays a crucial role in evaluating the overall effectiveness of the respective 
                architectural models.
              </Paragraph>
            

              <div className="mb-4" />

              <Paragraph>
                You're often told that it doesn't matter what you write about in your bachelor's thesis. Obviously, it may not be as
                grand or profound as some other works, but I disagree with the notion that it doesn't matter. It still represents a 
                substantial piece of writing that allows you to delve into and familiarize yourself with a topic on a somewhat deeper 
                level. Simultaneously, it provides an opportunity to practice scientific writing and critical thinking skills.
              </Paragraph>
            

              <div className="mb-4" />

              <Paragraph>
                I encountered difficulty in selecting the topic for my thesis, as I aimed to optimize it by balancing various factors. First and foremost, I wanted a topic that personally interested me and simultaneously challenged me to acquire new knowledge. Considering my fondness for arts and design, I contemplated a topic centered around human-computer interaction. However, I also felt that delving into something more technical could provide a greater challenge. From this perspective, topics like Full-stack development and even Real-time computer graphics came into consideration.
                Secondly, I aimed to choose a topic that would benefit me in my other projects outside the context of the bachelor's thesis. Given my enthusiasm for personal projects, something related to Full-stack development appeared to be a logical choice. Additionally, since I have a keen interest in starting my own company, I seriously considered exploring Software development in small companies.
                Thirdly, although impossible to predict entirely, I wanted the chosen topic to guide my skills and career in a direction that would be resilient against potential replacement by AI. In this regard, the detailed and specific technical knowledge associated with learning particular technologies in Full-stack development raised concerns about the long-term viability of this topic.
              </Paragraph>

              </Reveal>
            </SectionWrapper4>
            
            <SectionWrapper4>
              <Reveal>
                <div className="flex-1 flex flex-col items-center justify-center">             
                  <Image src={bachelorFrontPage} ImageClassName="max-w-full sm:max-w-[401px] mb-4"/>
                  <DownloadButton 
                    file={thesis}
                    filename="Alexander_Engelhardt_Thesis.pdf"
                    ButtonText="Thesis"
                  />
                </div>

                <div className="mb-5" />

                <Paragraph>
                  An interesting topic that could potentially be more robust against AI replacement is Model-Driven Development. However, I refrained from choosing this topic for my bachelor's thesis due to my limited experience with it.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  In the end, I decided to write about something related to Software Architecture as it felt like a topic that struck the best balance between the relevant factors. This choice was sufficiently technical to challenge me, and since software architecture forms the backbone of any software, it was crucial for me to deepen my understanding in this area. To enhance the focus on the technical aspects of software architecture, I opted to concentrate on quality attributes and architectural tactics.
                  To narrow down the scope and provide a more concrete focus for the thesis, I chose to refrain from delving into software architecture and quality attributes on a purely theoretical level. Instead, I directed my attention towards comparing two specific examples, aiming to provide a more practical and hands-on exploration of the subject.
                </Paragraph>
              </Reveal>
            </SectionWrapper4>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default BachelorsThesis;
