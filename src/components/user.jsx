import React from "react";

const User = () => {
  return (
    <div className="border  shadow-md p-3 w-1/3 text-black flex justify-center">
      <div className="user text-center">
        <h3>pseudo</h3>
        <img
          src="./images/hatake.jpg"
          alt="bill gates"
          className="w-16 h-48 md:w-32 lg:w-48 rounded-full"
        />
        <p>Age : 30 ans</p>
        <p>Like(s) : 0</p>
      </div>
    </div>
  );
};

export default User;
