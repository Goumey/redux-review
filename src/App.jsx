import { useState } from "react";

import Form from "./components/form";
import User from "./components/user";
import Post from "./components/post";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state.postReducer);
  console.log("post", posts);
  return (
    <>
      <div className="w-[60%] mx-auto relative">
        <div className="bg-white fixed w-[60%] top-0">
          <div className="flex justify-between my-5  bg-white ">
            <Form />
            <User />
          </div>
        </div>

        <div className="mt-[470px] px-2">
          {posts.length !== 0
            ? posts.map((post, index) => <Post post={post} key={index} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
