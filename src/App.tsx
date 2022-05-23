import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./ui/GlobalStyles";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRouter />
    </BrowserRouter>
  );
};
