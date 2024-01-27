import { useState } from "react";
import { getCards } from "../../api";
import "./search.css";

export const Search = ({ setCards, setIsLoading }) => {
  let [searchFieldValue, setSearchFieldValue] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  const handldeClick = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    // console.log("searchValue", searchFieldValue);
    if (searchFieldValue) {
      setCards([]);
      getCards({ q: searchFieldValue })
        .then((res) => {
          setCards(res.items);
          console.log(res.items);
          setIsLoading(false);
          if (!res.items.length) {
            setCards([]);
            setErrorMessage("No results");
          }
        })
        .catch(() => {
          setIsLoading(false);
          setErrorMessage("Something get wrong. Please, try again later");
        });
    } else {
      setIsLoading(false);
      setErrorMessage("Enter text value into search field");
    }
  };
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
      {errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : ""}
    </div>
  );
};
