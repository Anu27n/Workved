import React from 'react';

function Summary({ items }) {
  const calculateTotal = (field) => {
    return items.reduce((total, item) => total + (item[field] || 0) * (item.quantity || 0), 0);
  };

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>Economy Total: ${calculateTotal('economy')}</p>
      <p>Mid-Range Total: ${calculateTotal('midRange')}</p>
      <p>High-End Total: ${calculateTotal('highEnd')}</p>
    </div>
  );
}

export default Summary;
