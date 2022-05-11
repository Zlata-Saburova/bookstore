import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />} />
    </Routes>
  );
};
