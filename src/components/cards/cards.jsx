import "./cards.css";

export const Cards = ({ cards, setShowModal, setChoosedCard }) => {
  let cardsList = cards.map((card, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          setChoosedCard(card);
          setShowModal(true);
        }}
      >
        <a href="#">{card.login}</a>
      </li>
    );
  });
  return <ul className="myUL">{cardsList}</ul>;
};
