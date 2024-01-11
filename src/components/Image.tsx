import React from 'react';
import { motion } from 'framer-motion';
import { scale } from "../utils/variants";
import { transition } from "../utils/transition";

interface ImageProps {
  src: string;
  positionClassName?: string;
  ImageClassName: string;
  alt?: string;
  description?: string;
  border?: boolean;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  positionClassName="flex-1 flex flex-col items-center justify-center text-center",
  ImageClassName, 
  alt="", 
  description="", 
  border=false}) => (

  <div className={positionClassName}>
    <motion.img
      variants={scale()}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      src={src}
      alt={alt}
      className={ImageClassName}
      style={border ? { border: '2px solid #333' } : {}}
    />
    <div className="max-w-md mx-auto">
      <div className="mb-2" />
      <p className="text-left xl:text-start text-xs sm:text-sm text-textSecondary">
        {description}
      </p>
    </div>
  </div>
);

export default Image;
