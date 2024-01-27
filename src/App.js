import { useState } from "react";
import { Search } from "./components/searchBox/search";
import { Cards } from "./components/cards/cards";
import { Loader } from "./components/loader/loader";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Search setCards={setCards} setIsLoading={setIsLoading} />
      {cards ? <Cards cards={cards} /> : ""}
      {loading && <Loader />}
    </div>
  );
}

export default App;
