import "./cards.css";

export const Cards = ({ cards }) => {
  let cardsList = cards.map((card, index) => {
    return (
      <li key={index}>
        <a href="#">{card.login}</a>
      </li>
    );
  });
  return <ul className="myUL">{cardsList}</ul>;
};
