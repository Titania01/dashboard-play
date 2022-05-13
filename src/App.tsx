import { useContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./organism/context/DarkModeContext";
import Login from "./auth/login";
import { productInputs, userInputs } from "./organism/formsource";
import Home from "./pages/home";
import List from "./pages/list";
import NewPage from "./pages/newPage";
import SinglePage from "./pages/singlePage";
import "./style/dark.scss";

function App() {
  const {
    state: { darkMode },
  } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
