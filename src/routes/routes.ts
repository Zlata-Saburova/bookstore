export enum routes {
  HOME = "/bookstore",
  NEW = "/bookstore/new",
  SEARCHRESULTS = "/bookstore/search/:title/:page",
  DETAILS = "/bookstore/books/:id",
  SIGN_IN = "/bookstore/sign-in",
  SIGN_UP = "/bookstore/sign-up",
  NOT_FOUND = "*",
  FAVORITES = "/bookstore/favorites",
}
