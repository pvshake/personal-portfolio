import React, { FC } from "react";
import { socialMedias } from "../constants";
import Image from "next/image";

const SocialMedias: FC = () => {
  return (
    <div className="flex flex-row items-center gap-6 mt-4">
      {socialMedias.map((socialMedia, i) => {
        return (
          <>
            <div
              onClick={() => window.open(socialMedia.link_url, "_blank")}
              className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={socialMedia.icon}
                alt={socialMedia.name}
                className="w-1/2 h-1/2 object-contain hover:scale-150 transition-all ease-in-out duration-200"
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SocialMedias;
