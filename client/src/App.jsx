import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <div>
        <Toaster />
      </div>
      <div className="font-[Roboto]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
