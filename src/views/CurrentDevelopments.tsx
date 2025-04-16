// assets
import currentDevelopmentsFrontPage from "../assets/Current_developments.png"
import thesis from "../assets/Current_developments_in_Large_Language_Model_based_Debugging_2023_2024_Alexander_Engelhardt.pdf"


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



const CurrentDevelopments = () => {


  return (
    <SectionWrapper0 id="CurrentDevelopments" background="#fc923a" >
      <SectionWrapper1>

        <ViewTitle mainText="Current Developments in " spanText="LLM-based Debugging"/>

        <SectionWrapper2>
            <SectionWrapper4>
              <Reveal>
              <Paragraph style={{ color: 'Black' }}>
                This article was written as part of a seminar course, but gives just as valuable real world insights as a real article.
                By gathering recent literature focusing on LLM-based debugging and analysing trends and different approaches, this article
                answers three important questions:
                
                1. How does the general filed look like for LLM-based debugging?
                2. What are the key design decisions for LLM-based debugging?
                3. What are the general strengths and weaknesses of LLM-based debugging?
              </Paragraph>

              <div className="mb-4" />

              <Paragraph>
                From these results, the main findings are three-fold. First,
                it can be stated that the field of LLM-based debugging is
                at an early stage with radically different approaches being
                tested. Research mostly consists of building various LLM-
                based debugging tools and testing them out. The variety in
                these tools exemplifies the novel stage of this field.
                Second, we have identified 5 key design decisions when
                creating LLM-based debugging tools. These are 1. The specific
                LLM used, 2. the Fine-tuning process, 3. prompt engineering,
                4. tool integration, and 5. Thought-model.
              </Paragraph>

              </Reveal>
            </SectionWrapper4>
            
            <SectionWrapper4>
              <Reveal>
                <div className="flex-1 flex flex-col items-center justify-center">             
                  <Image src={currentDevelopmentsFrontPage} ImageClassName="max-w-full sm:max-w-[401px] mb-4"/>
                  <DownloadButton 
                    file={thesis}
                    filename="Current_Developments_in_LLM-based_Debugging_Alexander_Engelhardt.pdf"
                    ButtonText="Article"
                  />
                </div>
              </Reveal>
            </SectionWrapper4>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default CurrentDevelopments;
