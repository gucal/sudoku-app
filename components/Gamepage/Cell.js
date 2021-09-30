import React from 'react';

function Cell({ error, value, cell, i, onChange, isInitValue }) {
  const styles = error ? 'cell cell-editable error' : 'cell cell-editable';
  return isInitValue ? (
    <input readOnly className="cell" value={value} />
  ) : (
    <input className={styles} onChange={(e) => onChange(e, cell)} />
  );
}

export default Cell;
