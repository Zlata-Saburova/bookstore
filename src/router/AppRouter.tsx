import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { SearchResults } from "../components/SearchResults/SearchResults";
import { BookDetails } from "../pages/BookDetails";
import { Home } from "../pages/Home";
import { NewBooks } from "../pages/NewBooks";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.NEW} element={<NewBooks />} />
        <Route path={routes.SEARCHRESULTS} element={<SearchResults />} />
        <Route path={routes.DETAILS} element={<BookDetails />} />
      </Route>
    </Routes>
  );
};
