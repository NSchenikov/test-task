import React, { useEffect, useState, useRef } from "react";
import "./popup-menu.css";
import "../searchBox/search.css";

export const PopupMenu = ({ sort, onSort, handldeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const savedEvent = useRef(null);

  const handleSort = (sortOrder) => {
    setIsOpen(false);
    onSort(sortOrder);
  };

  useEffect(() => {
    if (savedEvent.current) {
      handldeClick(savedEvent.current);
    }
  }, [sort]);

  return (
    <div className="popup-menu">
      <button
        className="sort-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Sort Users
      </button>
      <div className={`menu-options ${isOpen ? "open" : ""}`}>
        <div
          className="menu-item"
          onClick={(e) => {
            handleSort("asc");
            savedEvent.current = e;
          }}
        >
          Sort by Ascending Repos
        </div>
        <div
          className="menu-item"
          onClick={(e) => {
            handleSort("desc");
            savedEvent.current = e;
          }}
        >
          Sort by Descending Repos
        </div>
      </div>
    </div>
  );
};
