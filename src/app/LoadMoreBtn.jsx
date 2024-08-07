import React from 'react';
import Loader from './Loader';

export default function LoadMoreBtn({ loading, onClick }) {
  return (
    <div className="load-more-container">
      {loading && <Loader />}
      <button className="button-more" onClick={onClick} disabled={loading}>
        Load more
      </button>
    </div>
  );
}
