import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <div className="">
        <Toaster />
      </div>
      <div className="App font-[Roboto]">
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default App;
