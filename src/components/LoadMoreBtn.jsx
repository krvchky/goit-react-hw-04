
import React from 'react';

export default function LoadMoreBtn({ loading, onClick }) {
  return (
    <div className="load-more-container">
      <button className="button-more" onClick={onClick} disabled={loading}>
        {loading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}
