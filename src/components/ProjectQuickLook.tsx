import React from 'react';
import { ReactNode } from 'react'
import { motion } from 'framer-motion';
import { Reveal, SectionWrapper4, ViewTitleSub, Paragraph, Card, Link } from "../components";
import { transition } from '../utils/transition';
import { scale } from '../utils/variants';

interface ProjectQuickLookProps {
  projectName: string;
  projectImageSrc: string;
  projectLink: string;
  children: ReactNode;
  projectLinkString?: string;
  projectColor?: string;
  
}

const ProjectQuickLook: React.FC<ProjectQuickLookProps> = ({
  projectName,
  projectImageSrc,
  projectLink,
  projectLinkString,
  projectColor = 'Black',
  children, // Add this line
}) => {
  return (
    <SectionWrapper4>
      <Reveal>
        <ViewTitleSub header={projectName} color={projectColor} />
        <div className="mb-4" />
        <Paragraph>
          {children}
          {projectLinkString && (
            <Link
              href={projectLink}
              linkString={projectLinkString || 'Learn More'}
            />
          )}
        </Paragraph>

        <motion.div
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex gap-12 mt-12 flex-wrap justify-center"
        >
          <Card imgSrc={projectImageSrc} title={projectName} link={projectLink} />
        </motion.div>

        <div className="mb-4" />
      </Reveal>
    </SectionWrapper4>
  );
};

export default ProjectQuickLook;


