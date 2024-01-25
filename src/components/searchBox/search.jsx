import { useState } from "react";
import { getCards } from "../../api";
import "./search.css";

export const Search = ({ cards, setCards }) => {
  let [searchFieldValue, setSearchFieldValue] = useState("");

  const handldeClick = (e) => {
    e.preventDefault();
    // console.log(searchFieldValue);
    getCards({ searchFieldValue })
      .then((res) => {
        setCards(res.items);
        console.log(res.items);
      })
      .then((res) => {
        console.log(cards);
      });
  };
  return (
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
  );
};
