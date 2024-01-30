import { useState } from "react";

import Form from "./components/form";
import User from "./components/user";

function App() {
  return (
    <>
      <div className="w-[60%] mx-auto flex justify-between my-5">
        <Form />
        <User />
      </div>
    </>
  );
}

export default App;
