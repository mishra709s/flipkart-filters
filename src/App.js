import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";

import ProductContextProvider from "./Context/ProductContext";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductContextProvider>
        <div className="mainBody">
          <Sidebar />
          <Body />
        </div>
      </ProductContextProvider>
    </div>
  );
}

export default App;
