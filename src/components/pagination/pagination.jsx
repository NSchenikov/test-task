import "./pagination.css";

export const Pagination = ({ cards, page, setPage, handldeClick }) => {
  return (
    <div className="buttons">
      {cards.length ? (
        <div>
          {page !== 1 ? (
            <button
              className="btn"
              onClick={(e) => {
                setPage(page - 1);
                handldeClick(e);
              }}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          <button
            className="btn"
            onClick={(e) => {
              setPage(page + 1);
              handldeClick(e);
            }}
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
