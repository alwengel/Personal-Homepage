import React, { ReactNode, CSSProperties } from 'react';

interface ParagraphProps {
  style?: CSSProperties;
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ style, children }) => (
  <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={style}>
    {children}
  </p>
);

export default Paragraph;
