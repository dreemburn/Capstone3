import React from 'react';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;