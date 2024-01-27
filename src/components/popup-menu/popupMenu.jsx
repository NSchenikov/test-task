import React, { useState } from "react";
import "./popup-menu.css";
import "../searchBox/search.css";

export const PopupMenu = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (sortOrder) => {
    setIsOpen(false);
    onSort(sortOrder);
  };

  return (
    <div className="popup-menu">
      <button id="submit" onClick={() => setIsOpen(!isOpen)}>
        Sort Users
      </button>
      <div className={`menu-options ${isOpen ? "open" : ""}`}>
        <div className="menu-item" onClick={() => handleSort("asc")}>
          Sort by Ascending Repos
        </div>
        <div className="menu-item" onClick={() => handleSort("desc")}>
          Sort by Descending Repos
        </div>
      </div>
    </div>
  );
};
