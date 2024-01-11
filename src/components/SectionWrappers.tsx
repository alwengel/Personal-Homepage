import React from 'react';

// utils
import { generateBackgroundSVG } from '../utils/backgroundSVG';


interface SectionWrapperProps {
  id?: string;
  background?: string;
  children: React.ReactNode;
}

// SectionWrapper 0
export const SectionWrapper0: React.FC<SectionWrapperProps> = ({ id, background = 'white', children }) => {

  const svgString = generateBackgroundSVG(background);

  return (
    <div
      id={id}
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

// First SectionWrapper
export const SectionWrapper1: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="max-w-screen-2xl xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-1">
    {children}
  </div>
);

// Second SectionWrapper
export const SectionWrapper2: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-6">
    {children}
  </div>
);

// Third SectionWrapper
export const SectionWrapper3: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="flex-1 flex flex-col xl:flex-row gap-4">
    {children}
  </div>
)

// Fourth SectionWrapper
export const SectionWrapper4: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="flex-1">
    {children}
  </div>
)
