import React from 'react';

const Pagination = ({ currentPage, pageSize, onPageChange, onPageSizeChange }) => {
  

  return (
    <div>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>
      <button onClick={() => onPageChange(currentPage + 1)}>{'>'}</button>
      <select onChange={(e) => onPageSizeChange(e.target.value)} value={pageSize}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
