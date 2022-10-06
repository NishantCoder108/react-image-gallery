import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";

const ImageGallery = ({ downloads, likes, tags, views, image, id }) => {
  const tagElement = tags?.split(",");
  // console.log(tagElement);

  return (
    <div className="w-80 bg-stone-800  flex flex-col text-sky-400 rounded m-1 ">
      <img src={image} alt="image" className="h-64" />

      <p className="p-3 flex items-center gap-1">
        <AiFillEye /> {views}
      </p>
      <div className="flex justify-between">
        <p className="p-3 flex items-center gap-1 text-sky-400">
          <FcLike /> {likes}{" "}
        </p>
        <p className="p-3 flex items-center gap-1">
          {downloads} <AiOutlineDownload />
        </p>
      </div>
      <div className="flex justify-evenly py-3">
        {tagElement?.map((item, index) => {
          return (
            <small
              key={index}
              className="p-1 border-solid border-2 border-sky-300   rounded-full"
            >
    
              #{item}
            </small>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
