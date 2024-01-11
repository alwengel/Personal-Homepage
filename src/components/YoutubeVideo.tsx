import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  className?: string;
  description: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, className, description }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="Berry Picker Tracker"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`max-w-full ${className}`} // Add className prop to the iframe
      ></iframe>
      <div className="max-w-md mx-auto">
        <div className="mb-2" />
        <p className="text-left xl:text-start text-xs sm:text-sm text-textSecondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default YouTubeVideo;
