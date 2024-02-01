import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
const Post = ({ post }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const user = useSelector((state) => state.userReducer);
  return (
    <div className="border shadow-md m-2 w-full  p-4">
      <div className="flex justify-between">
        <h2 className="my-2 text-2xl font-semibold">{post.title}</h2>
        {user[0]?.pseudo == post.author && (
          <div className="flex items-center gap-x-3 cursor-pointer ">
            <span
              className="text-green-600"
              onClick={() => setToggleEdit(true)}
            >
              {" "}
              <FaPen />
            </span>
            <span className="text-red-500 ">
              {" "}
              <FaTrash />
            </span>
          </div>
        )}
      </div>

      <div className="w-full">
        <img src={post.img} className="w-full h-80  bg-cover" />
      </div>
      <div className="content">
        {toggleEdit == true ? (
          <form>
            <textarea
              name="-"
              id=""
              rows="8"
              placeholder="Post content"
              className="border border-black p-2 my-3 w-full"
              defaultValue={post.content}
            />
            <button className="bg-green-500 text-white p-2 w-64 rounded">
              Modifier
            </button>
          </form>
        ) : (
          <p className="my-2">{post.content}</p>
        )}
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
