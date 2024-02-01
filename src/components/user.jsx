import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  //   const { pseudo, likes, age, id } = user[0];

  return (
    <div className="border  shadow-md p-3 w-1/3 text-black flex justify-center">
      <div className="user text-center">
        <h3>{user[0]?.pseudo}</h3>
        <img
          src="./images/hatake.jpg"
          alt="bill gates"
          className="w-16 h-48 md:w-32 lg:w-48 rounded-full"
        />
        <p>Age : {user[0]?.age} ans</p>
        <p>Like(s) : {user[0]?.likes}</p>
      </div>
    </div>
  );
};

export default User;
