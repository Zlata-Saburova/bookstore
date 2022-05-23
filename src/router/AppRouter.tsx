import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { BookDetails } from "../pages/BookDetails";
import { Home } from "../pages/Home";
import { NewBooks } from "../pages/NewBooks";
import { Search } from "../pages/Search";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.NEW} element={<NewBooks />} />
        <Route path={routes.SEARCH} element={<Search />} />
        <Route path={routes.DETAILS} element={<BookDetails />} />
      </Route>
    </Routes>
  );
};
