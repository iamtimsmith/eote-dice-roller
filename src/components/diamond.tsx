import React from 'react';

export default ({ color = 'green', count = 0 }) => (
  <div className={`diamond ${color}`}>
    <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
      <path d='M2,50 50,2 98,50 50,98z' fill={color} />
    </svg>
    <span>{count}</span>
  </div>
);
