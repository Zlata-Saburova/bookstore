import {
  Container,
  FindButton,
  Img,
  ResultButton,
  ResultLI,
  ResultsBlock,
  ResultTitle,
  SearchInput,
  StyledHeaderForm,
  StyledLink,
} from "./styles";
import { useForm } from "react-hook-form";
import { Search } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { bookApi } from "../../services/bookService";
import { ISearchBooksApi } from "../../services/types";
import OutsideClickHandler from "react-outside-click-handler";

export const HeaderForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const onSubmit = (data: any) => {
    navigate(`/bookstore/search/${data.title}/1`);
    setTitle("");
  };

  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

  useEffect(() => {
    bookApi.getBooksBySearch(title, "1").then((books) => {
      setSearchResult(books);
    });
  }, [title]);

  return (
    <StyledHeaderForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput
        type="text"
        placeholder="Search"
        {...register("title", {
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value),
        })}
        value={title}
      />
      <FindButton type="submit">
        <Search />
      </FindButton>
      <OutsideClickHandler
        onOutsideClick={() => {
          setTitle("");
        }}
      >
        {title.length > 0 && (
          <ResultsBlock>
            <Container>
              <>
                {searchResult?.books.map((book) => {
                  return (
                    <StyledLink
                      key={book.isbn13}
                      to={`/bookstore/books/${book.isbn13}`}
                      onClick={() => setTitle("")}
                    >
                      <ResultLI>
                        <Img src={book.image} alt={book.title} />
                        <ResultTitle>{book.title}</ResultTitle>
                      </ResultLI>
                    </StyledLink>
                  );
                })}
              </>
            </Container>
            <ResultButton>all results</ResultButton>
          </ResultsBlock>
        )}
      </OutsideClickHandler>
    </StyledHeaderForm>
  );
};
