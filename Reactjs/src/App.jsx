import React, { useState } from "react";
import { FunctionCall } from "./functionCall";

const App = () => {
  const value = "Aditya";
  const age = 21;
  const [num, setNum] = useState(0);

  const pswd = () => {
    console.log("password changed");
  };
  return (
    <div>
      <hr />
      <h1>Hello</h1>
      <h2>
        {value},{age}
      </h2>
      "i'm from main.jsx exported by app.jsx "
      <hr />
      <FunctionCall />
      <hr />
      <div>
        <button onClick={pswd}>Change password</button>
      </div>
      <hr />
      <div className="bg-black">
        <h2 className="text-2xl">The number is : {num}</h2>
        <button className="" onClick={() => setNum(num + 1)}>
          Increment
        </button>
        <button onClick={() => setNum(num - 1)}>Decrement</button>
      </div>
      <hr />
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-teal-500"
        />
      </form>
    </div>
  );
};
export default App;
