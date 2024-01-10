// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  href?: string | any; // Making href optional
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, href }) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center h-12 w-12 cursor-pointer
            transition-all ease-linear duration-300 hover:scale-105"
          >
            <img src={imgSrc} alt=""></img>
          </div>
        </a>
      ) : (
        <div className="flex items-center justify-center h-12 w-12 cursor-pointer
          transition-all ease-linear duration-300 hover:scale-105"
        >
          <img src={imgSrc} alt=""></img>
        </div>
      )}
    </Tooltip>
  );
};

export default SocialMediaIcon;
