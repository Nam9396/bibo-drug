import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Example from "./component/example";
import Header from "./component/header";
import Info from "./component/info";
import Main from "./component/main";

const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/example" element={<Example />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </HashRouter>
  )
};

export default App;