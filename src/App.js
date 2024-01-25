import { useState } from "react";
import { Search } from "./components/searchBox/search";
import { Cards } from "./components/cards/cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <Search cards={cards} setCards={setCards} />
      {cards ? <Cards cards={cards} /> : ""}
    </div>
  );
}

export default App;
