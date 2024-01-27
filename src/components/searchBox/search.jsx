import { useState, useEffect } from "react";
import { getCards } from "../../api";
import { PopupMenu } from "../popup-menu/popupMenu";
import "./search.css";

export const Search = ({ cards, setCards, setIsLoading }) => {
  let baseUrl = "https://api.github.com/search/users?q=";
  let [searchFieldValue, setSearchFieldValue] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [sort, onSort] = useState("");
  const [page, setPage] = useState(1);

  const handldeClick = (e) => {
    e.preventDefault();
    let endpoint = baseUrl + searchFieldValue + `&page=${page}`;
    if (sort) {
      endpoint += `&sort=repositories&order=${sort}`;
    }
    // console.log(endpoint);
    setErrorMessage("");
    setIsLoading(true);
    if (searchFieldValue) {
      setCards([]);
      getCards({ endpoint: endpoint })
        .then((res) => {
          setCards(res.items);
          if (!res.items.length) {
            setErrorMessage("No results");
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setCards([]);
          setErrorMessage("Something went wrong. Please, try again later");
        });
    } else {
      setIsLoading(false);
      setCards([]);
      setErrorMessage("Enter text value into the search field");
    }
  };
  useEffect(() => {
    console.log(cards);
  }, [cards]);
  return (
    <div>
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search for..."
          value={searchFieldValue}
          onChange={(e) => {
            setSearchFieldValue(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          value="go"
          id="submit"
          onClick={(e) => handldeClick(e)}
        >
          GO
        </button>
      </form>
      <PopupMenu sort={sort} onSort={onSort} handldeClick={handldeClick} />
      {cards.length ? (
        <div>
          {page !== 1 ? (
            <button
              onClick={(e) => {
                setPage(page - 1);
                handldeClick(e);
              }}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          <button
            onClick={(e) => {
              setPage(page + 1);
              handldeClick(e);
            }}
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
      {errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : ""}
    </div>
  );
};
