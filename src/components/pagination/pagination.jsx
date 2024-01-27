import "./pagination.css";
import "../searchBox/search.css";

export const Pagination = ({ cards, page, setPage, handldeClick }) => {
  return (
    <div className="buttons">
      {cards.length ? (
        <div>
          {page !== 1 ? (
            <button
              id="submit"
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
            id="submit"
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
