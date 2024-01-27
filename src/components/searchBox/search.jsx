import { useState, useEffect } from "react";
import { getCards } from "../../api";
import { PopupMenu } from "../popup-menu/popupMenu";
import "./search.css";

export const Search = ({ cards, setCards, setIsLoading }) => {
  let baseUrl = "https://api.github.com/search/users?q=";
  let [searchFieldValue, setSearchFieldValue] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [sort, onSort] = useState("");

  const handldeClick = (e) => {
    e.preventDefault();
    let endpoint;
    if (sort) {
      endpoint =
        baseUrl + searchFieldValue + `&page=1&sort=repositories&order=${sort}`;
    } else {
      endpoint = baseUrl + searchFieldValue + `&page=1`;
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
      <PopupMenu onSort={onSort} />
      {errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : ""}
    </div>
  );
};
