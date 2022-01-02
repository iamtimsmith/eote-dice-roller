import React from 'react';

export default ({ color = 'blue', count = 0 }) => (
  <div
    className={`square ${color}`}
    style={{ background: `var(--color-${color}` }}
  >
    <span>{count}</span>
  </div>
);
