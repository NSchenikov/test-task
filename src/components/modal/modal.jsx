import "./modal.css";

export const Modal = ({ card, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <img className="modal-img" src={card.avatar_url} alt="profile pic" />
        <div className="modal-body">
          <div className="modal-name">{card.login}</div>
          <div className="modal-role">{card.id}</div>
          <div className="skills">{card.repos_url}</div>
        </div>
        <button className="close-btn" onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  );
};
