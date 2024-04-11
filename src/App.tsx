import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Request from "pages/Request";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  );
}

export default App;
