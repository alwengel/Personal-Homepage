import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from "../components";

interface ViewTitleProps {
  mainText: string;
  spanText?: string;
  mainColor?: string;
  spanColor?: string;
}

const ViewTitle: React.FC<ViewTitleProps> = ({ mainText, spanText, mainColor = 'white', spanColor = 'black' }) => {
    return (
      <motion.div className="text-center xl:text-start">
        {/* Assuming Reveal is another component you have */}
        <Reveal>
          <h2 className={`text-4xl sm:text-5xl lg:text-[64px] font-bold text-${mainColor}`}>
            {mainText}{' '}
            <span className="text-secondary" style={{ color: spanColor }}>
              {spanText}
            </span>
          </h2>
        </Reveal>
      </motion.div>
    );
  };
  
  export default ViewTitle;