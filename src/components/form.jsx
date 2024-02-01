import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post.action";

const Form = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    img: `https://picsum.photos/200?random=${Math.random() * 3000}`,
    author: user[0]?.pseudo,
    likes: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, author: user[0]?.pseudo });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost(formData));
  };

  return (
    <div className="border shadow-md mx-2 w-2/3 p-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group my-5">
          <input
            type="text"
            name="title"
            placeholder="Post of tilte"
            className="border border-black p-2 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="input-group my-5">
          <textarea
            name="content"
            id=""
            cols="5"
            rows="5"
            placeholder="Post content"
            className="border border-black p-2 w-full"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-64 rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
