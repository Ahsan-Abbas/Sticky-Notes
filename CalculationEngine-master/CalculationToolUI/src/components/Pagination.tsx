import { useState } from 'react';
import "./Pagination.scss";
import Translatable from './Translatable';

interface IPaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  /** Index of current page (0-based) */
  currentPage: number;
  /** When page is changed, this function is called with the selected page number (0-based) */
  onPageChanged: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChanged
}: IPaginationProps) => {
  if (typeof itemsPerPage === "undefined" || totalItems <= itemsPerPage)
    return <></>;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages)
      onPageChanged(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 0)
      handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage <= totalPages - 1)
      handlePageChange(currentPage + 1);
  };

  if (currentPage >= totalPages)
    handlePageChange(totalPages - 1);

  return (
    <div className="col-1 pagination-wrapper">
      <ul>
        <li>
          <button className={currentPage == 0 ? "disabled" : ""} onClick={handlePreviousClick}><Translatable name="tablePagingPrevious" /></button>
        </li>
        <li>
          <span><Translatable name="tablePagingPagePrefix" /></span>
        </li>
        <li>
          <input type="number" value={currentPage + 1} onChange={(e) => handlePageChange(Number(e.target.value))} />
        </li>
        <li>
          <span><Translatable name="tablePagingPageSuffix" parameters={[totalPages]} /></span>
        </li>
        <li>
          <button className={currentPage >= totalPages - 1 ? "disabled" : ""} onClick={handleNextClick}><Translatable name="tablePagingNext" /></button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
