// var parent = document.querySelector("#parent")
// var h1 = document.createElement("h1");
// h1.innerHTML = "hello Js";
// root.appendChild(h1)
// console.log(h1);

// console.log(React);

// var h1 = React.createElement("tag",property/attribute ,"content")

var h1 = React.createElement("h1", null, "Hello from React");
var parent = document.querySelector("#parent");
// console.log(parent);
var root = ReactDOM.createRoot(parent);
root.render(h1);

// npm create Vite
// project name:
// select a framework:
// select variant:
// cd projectname
// npm install
// npm run dev
