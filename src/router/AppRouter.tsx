import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/bookstore" element={<MainTemplate />} />
    </Routes>
  );
};
