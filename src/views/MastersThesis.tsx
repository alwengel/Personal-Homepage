// assets
import MasterFrontPage from "../assets/MastersFrontPage.png"
import SymbolicHead from "../assets/symbolic_head.png"
import mastersThesis from "../assets/Neural_Router__A_System_for_Structure_Agnostic_and_Configuration_Free_Content_Delivery.pdf"


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



const MastersThesis = () => {


  return (

    <SectionWrapper0 id="MastersThesis" background="#FFFFF9" >
      <SectionWrapper1>

        <ViewTitle mainText="Master's" spanText="Thesis" mainColor="Black" spanColor="Green"/>

        <SectionWrapper2>
        <SectionWrapper4>
            <Reveal>
                <h2 className="text-xl font-semibold text-left mb-1" style={{ color: 'Green' }}>
                    Abstract
                </h2>
                <Paragraph style={{ color: 'Black' }}>
                As data volumes and complexity continue to grow, the development of effective data management solutions that work on a scale becomes increasingly challenging. Recent advances in artificial intelligence provide new tools to address this challenge by enabling software capable of handling diverse data in an intelligent and intent-driven manner.
                <div className="mb-2" />
                This thesis presents such a software solution for the publish-subscribe paradigm, the <i>de facto</i> communication model for asynchronous and decoupled communication. The two main contributions are: (1) the <b>Agentic Pub-Sub Architecture</b>, which establishes a system capable of processing <i>highly diverse data with immediate effect while continuously self-improving over time</i>; and (2) the implementation of <b>Neural Router</b>, which provides the diverse data processing and immediate functionality within the Agentic Pub-Sub Architecture by handling data in a structure-agnostic and configuration-free manner.
                <div className="mb-2" />
                To validate the effectiveness of the Neural Router, it was tested on two real-world datasets that represent opposites in the structuredness spectrum. The first, <i>CardiffNlp</i>, consists of social media posts and evaluates the Neural Router’s ability to handle ambiguous natural language. The second dataset, <i>SmartCampus</i>, consists of sensor readings and evaluates the performance of the Neural Router on structured numerical data. With identical configurations, the Neural Router achieves an F1-score of 0.619 on CardiffNlp and 0.900 on SmartCampus. However, manual inspection of the CardiffNlp results suggests a significantly higher practical accuracy.
                <div className="mb-2" />
                By introducing the Neural Router and establishing the foundations of the Agentic Pub-Sub Architecture, this thesis demonstrates the potential for an intelligent publish-subscribe system capable of addressing challenges that traditional, application-specific solutions cannot resolve.
                </Paragraph>

                <div className="mb-4" />
                <h2 className="text-xl font-semibold text-left mb-1" style={{ color: 'Green' }}>
                    Writing the Thesis
                </h2>
                <Paragraph style={{ color: 'Grey' }}>
                Writing this thesis has been an invaluable learning experience. It has deepened my technical
                knowledge and sparked several new interests and ideas. It has also refined my skills
                in designing and evaluating systems and improved my scientific writing ability.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph style={{ color: 'Grey' }}>
                Furthermore, working as part of a larger team has provided valuable insight into how
                individual contributions fit into a broader context. This journey has reinforced two key
                lessons: it is possible to learn a lot in a short time, and even more crucial, never be afraid
                to ask the questions you feel are important.
                </Paragraph>

                <div className="mb-4" />

                <Paragraph style={{ color: 'Grey' }}>
                The thesis work was carried out in the Business Finland Neural Pub/Sub research project.
                The Neural Router presented in this thesis is based on the early design of the Neural Router
                by Professor Sasu Tarkoma - my supervisor. I would like to thank him for the opportunity
                to work on this and for trusting me to incorporate my own ideas. I also want to thank
                my second supervisor Dr. Abhishek Kumar for being there on a weekly basis, guiding me
                through the practices of the academic world and for validating the feasibility of many of
                my proposed solutions. I greatly appreciate your support throughout the process.
                </Paragraph>
            </Reveal>
            </SectionWrapper4>

            
            <SectionWrapper4>
              <Reveal>
                <div className="flex-1 flex flex-col items-center justify-center">
                <div className="mb-10" />            
                <Image 
                    src={MasterFrontPage} 
                    ImageClassName="max-w-full sm:max-w-[401px] mb-4 border border-gray-300 rounded"
                />
                  <DownloadButton 
                    file={mastersThesis}
                    filename="Alexander_Engelhardt_Thesis.pdf"
                    ButtonText="Master's Thesis"
                  />

                <div className="mb-10" />

                <div className="flex flex-col items-center justify-center my-16">
                    <img 
                        src={SymbolicHead} 
                        alt="Symbolic Head of Cognition" 
                        className="max-w-full sm:max-w-[401px]" 
                    />

                    {/* Copyright text and logo */}
                    <div className="flex items-center justify-center text-[10px] mt-[-0.5rem]">
                        <span>Wells, 1883</span>
                    </div>

                    {/* Caption */}
                    <p className="text-center italic text-sm max-w-[75%] mt-3">
                        Artificial intelligence may soon understand us better than we do ourselves, yet for now, it was hopeless at interpreting this symbolic head of cognition.
                    </p>

                    {/* Sentiment line */}
                    <p className="text-center font-semibold mt-12">
                        A sentiment of the times in which this thesis was written
                    </p>
                    </div>

                </div>
              </Reveal>
            </SectionWrapper4>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>

  );
}

export default MastersThesis;
