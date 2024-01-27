// import { useEffect } from "react";
// import { getRepos } from "../../api";
import "./modal.css";

export const Modal = ({ card, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  // useEffect(() => {
  //   console.log("card", card.repos_url);
  //   getRepos({ endpoint: card.repos_url }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <img className="modal-img" src={card.avatar_url} alt="profile pic" />
        <div className="modal-body">
          <div className="modal-name">login: {card.login}</div>
          <div className="modal-role">id: {card.id}</div>
        </div>
        <button className="close-btn" onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  );
};
