import { useState } from "react";
import { Search } from "./components/searchBox/search";
import { Cards } from "./components/cards/cards";
import { Loader } from "./components/loader/loader";
import { Modal } from "./components/modal/modal";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [choosedCard, setChoosedCard] = useState(null);

  return (
    <div className="App">
      <Search cards={cards} setCards={setCards} setIsLoading={setIsLoading} />
      {cards ? (
        <Cards
          cards={cards}
          setShowModal={setShowModal}
          setChoosedCard={setChoosedCard}
        />
      ) : (
        ""
      )}
      {loading && <Loader />}
      {showModal && <Modal card={choosedCard} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
