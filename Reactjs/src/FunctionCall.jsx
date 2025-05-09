import React, { useState } from "react";
// hooks - special type of functions  which are provides feature in React
// state change - jab kisi chiz ki value update kren to uski state change ho jati hai jese notification bell pr number

// let user = "aadi";

export const FunctionCall = () => {
  const [user, setUser] = useState("aadi"); //useStateSnippet

  const changeUser = () => {
    // console.log(user)
    // user = "Chunu" // we can't directly intercat with DOM we need react in ReactJS so use "useState" hook to change username on frontend
    setUser("Aditya");
    console.log("username is changed");
    // console.log(user);
  };

  return (
    <div>
      <h1>Username is {user} </h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};
