import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Post = ({ post }) => {
  console.log(post.img);
  return (
    <div className="border shadow-md m-2 w-full  p-4">
      <div className="flex justify-between">
        <h2 className="my-2 text-2xl font-semibold">{post.title}</h2>
        <div className="flex items-center gap-x-3 ">
          <span className="text-green-600">
            {" "}
            <FaPen />
          </span>
          <span className="text-red-500 ">
            {" "}
            <FaTrash />
          </span>
        </div>
      </div>

      <div className="w-full">
        <img src={post.img} className="w-full h-64 bg-cover" />
      </div>
      <div className="content">
        <p className="my-2">{post.content}</p>
        <div className=" flex justify-end items-center gap-3">
          <h3 className="font-bold">{post.author} </h3>
          <p className="text-gray-700 ">{post.likes} </p>
          <span className=" text-red-500">
            <CiHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
