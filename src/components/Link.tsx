import React from 'react';

interface LinkProps {
  href: string;
  linkString: string;
}

const Link: React.FC<LinkProps> = ({ href, linkString}) => (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-left xl:text-start text-base sm:text-lg text-textSecondary"
    style={{ color: '#6fa8dc', textDecoration: 'underline' }}
    >
        {linkString}
    </a>
);

export default Link;
