import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from "../components";

interface ViewTitleSubProps {
  header: string;
  color?: string;
}

const ViewTitleSub: React.FC<ViewTitleSubProps> = ({ header, color = 'white' }) => {
  return (
    <motion.div className={`text-center xl:text-start text-text${color}`}>
      <Reveal>
        <h3 className={`text-center xl:text-start text-2xl sm:text-3xl lg:text-4xl font-bold text-${color}`}>
          {header}
        </h3>
      </Reveal>
    </motion.div>
  );
};

export default ViewTitleSub;
