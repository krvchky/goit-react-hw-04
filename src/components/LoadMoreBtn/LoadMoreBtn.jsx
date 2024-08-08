
import React from 'react';
import s from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ loading, onClick }) {
  return (
    <div className={s.loadMoreContainer}>
      <button className={s.buttonMore} onClick={onClick} disabled={loading}>
        {loading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}
