import React from "react";

const Form = () => {
  return (
    <div className="border shadow-md mx-2 w-2/3 p-4">
      <form action="">
        <div className="input-group my-5">
          <input
            type="text"
            placeholder="Post of tilte"
            className="border border-black p-2 w-full"
          />
        </div>
        <div className="input-group my-5">
          <textarea
            name=""
            id=""
            cols="5"
            rows="5"
            placeholder="Post content"
            className="border border-black p-2 w-full"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 w-64 rounded">
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
