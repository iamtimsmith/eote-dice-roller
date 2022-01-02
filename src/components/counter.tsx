import React from 'react';

export default ({ label, count, setCount }) => {
  return (
    <div className='counter'>
      <p className='counter-label'>{label}:</p>
      <button
        className='counter-button'
        onClick={() => (count > 0 ? setCount(count - 1) : 0)}
        aria-label={`Remove a ${label} dice`}
      >
        -
      </button>
      <span className='counter-text'>{count}</span>
      <button
        className='counter-button'
        onClick={() => setCount(count + 1)}
        aria-label={`Add a ${label} dice`}
      >
        +
      </button>
    </div>
  );
};
