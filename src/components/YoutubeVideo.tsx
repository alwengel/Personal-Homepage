import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  className?: string; 
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, className }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="Berry Picker Tracker"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`max-w-full ${className}`} // Add className prop to the iframe
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
