import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Second from "./Pages/Second";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

