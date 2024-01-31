import React from "react";

const Post = () => {
  return (
    <div className="border shadow-md mx-2 w-full p-4">
      <div className="w-full">
        <img src="./images/hatake.jpg" className="w-full h-48 bg-cover" />
      </div>
      <div className="content">
        <h3>title</h3>
        <p>content</p>
      </div>
    </div>
  );
};

export default Post;
