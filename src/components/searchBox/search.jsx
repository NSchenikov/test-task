import { useEffect, useState } from "react";
import { getCards, getRepos } from "../../api";
import "./search.css";

export const Search = ({ cards, setCards, setIsLoading }) => {
  let [searchFieldValue, setSearchFieldValue] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  const addReposNum = async (array, reposNum) => {
    const updatedArray = await Promise.all(
      array.map(async (obj) => {
        const repos = await getRepos({ endpoint: obj.repos_url });
        return { ...obj, [reposNum]: repos };
      })
    );
    setCards(updatedArray);
  };

  const handldeClick = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    if (searchFieldValue) {
      setCards([]);
      getCards({ q: searchFieldValue })
        .then((res) => {
          setCards(res.items);
          if (!res.items.length) {
            setErrorMessage("No results");
            setIsLoading(false);
          } else {
            addReposNum(res.items, "reposNum"); // Вызываем addReposNum после установки состояния cards
          }
        })
        .catch(() => {
          setIsLoading(false);
          setErrorMessage("Something went wrong. Please, try again later");
        });
    } else {
      setIsLoading(false);
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
      {errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : ""}
    </div>
  );
};
