import { useState } from "react";

import Form from "./components/form";
import User from "./components/user";
import Post from "./components/post";

function App() {
  return (
    <>
      <div className="w-[60%] mx-auto ">
        <div className="flex justify-between my-5">
          <Form />
          <User />
        </div>
        <div className="">
          <Post />
        </div>
      </div>
    </>
  );
}

export default App;
