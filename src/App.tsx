import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "components/Nav";
import TestPage from "./pages/TestPage";
import LoginPage from "./pages/LoginPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/main" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
