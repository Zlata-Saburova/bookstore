import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { SearchResults } from "../components/SearchResults/SearchResults";
import { Account } from "../pages/Account";
import { BookDetails } from "../pages/BookDetails";
import { Cart } from "../pages/Cart";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { NewBooks } from "../pages/NewBooks";
import { SignIn } from "../pages/SignIn";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.NEW} element={<NewBooks />} />
        <Route path={routes.SEARCHRESULTS} element={<SearchResults />} />
        <Route path={routes.DETAILS} element={<BookDetails />} />
        <Route path={routes.SIGN_IN} element={<SignIn />} />
        <Route path={routes.FAVORITES} element={<Favorites />} />
        <Route path={routes.CART} element={<Cart />} />
        <Route path={routes.ACCOUNT} element={<Account />} />
      </Route>
    </Routes>
  );
};
