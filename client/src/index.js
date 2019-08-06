import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import InsertLaptop from "./componants/insertLaptop";
import ShowLaptop from "./componants/showLaptop";

ReactDOM.render(<ShowLaptop />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
