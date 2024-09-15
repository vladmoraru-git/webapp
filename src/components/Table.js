import React from 'react';
import './Table.css';

const Table = ({ guess }) => {
  const rows = 6;
  const cols = 5;

  return (
    <div className="table">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="table-row" key={rowIndex}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div className="table-cell" key={colIndex}>
              {rowIndex === 0 && colIndex < guess.length ? guess[colIndex] : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
