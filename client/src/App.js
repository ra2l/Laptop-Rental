import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import insertLaptop from "./componants/insertLaptop";
import showLaptop from "./componants/showLaptop";
import Navbar from "./componants/navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={showLaptop} exact />
        <Route path="/insert" component={insertLaptop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
