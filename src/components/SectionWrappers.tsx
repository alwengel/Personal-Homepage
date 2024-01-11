import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
}

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
