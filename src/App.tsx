import React, { useContext } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/reducer";
import { NavLayout } from "./layouts/nav";
import { HomeRoute } from "./route/home.route";
import { LoginRoute } from "./route/login.route";
import { RegisterRoute } from "./route/register.route";
import { AboutRoute } from "./route/about.route";
import { IntroRoute } from "./route/intro.route";
import { NewsRoute } from "./route/news.route";
import { ProductRoute } from "./route/product.route";

function App() {
  const { isLogin } = useContext(UserContext);
  if (!isLogin) {
    return (
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/lien-he" element={<AboutRoute />} />
          <Route path="/gioi-thieu" element={<IntroRoute />} />
          <Route path="/tin-tuc" element={<NewsRoute />} />
          <Route path="/san-pham" element={<ProductRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/lien-he" element={<AboutRoute />} />
          <Route path="/gioi-thieu" element={<IntroRoute />} />
          <Route path="/tin-tuc" element={<NewsRoute />} />
          <Route path="/san-pham" element={<ProductRoute />} />
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
