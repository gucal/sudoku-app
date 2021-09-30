import React from 'react';
import Cell from './Cell';

function Board({ cells, loading, onChange }) {
  const renderCell = (i) => {
    const cellsVariable = cells;
    return (
      <Cell
        key={i}
        value={cellsVariable[i].value}
        cell={i}
        isInitValue={cellsVariable[i].isInitValue}
        error={cellsVariable[i].error}
        onChange={(e, k) => onChange(e, k)}
      />
    );
  };

  const renderRow = (i) => {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(renderCell(j + i * 9));
    }
    return row;
  };

  let boardPrint = [];
  if (!loading) {
    for (let i = 0; i < 9; i++) {
      boardPrint.push(
        <div key={i} className="board-row">
          {renderRow(i)}
        </div>,
      );
    }
  }

  return <div>{boardPrint}</div>;
}

export default Board;
