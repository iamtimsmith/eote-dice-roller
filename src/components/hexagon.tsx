import React from 'react';

export default ({ color = 'yellow', count = 0 }) => (
  <div className={`hexagon ${color}`}>
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      height='60'
      width='60'
      preserveAspectRatio='none'
      viewBox='0 0 50 50'
    >
      <path
        fill={color}
        d='M25.980762113533157 0L51.96152422706631 15L51.96152422706631 45L25.980762113533157 60L0 45L0 15Z'
      ></path>
    </svg>
    <span>{count}</span>
  </div>
);
