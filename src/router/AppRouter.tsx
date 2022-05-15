import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home } from "../pages/Home";
import { NewBooks } from "../pages/NewBooks";
import { Search } from "../pages/Search";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/bookstore" element={<MainTemplate />}>
        <Route path="/bookstore" element={<Home />} />
        <Route path="/bookstore/new" element={<NewBooks />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};
