import React from 'react';

const CommonComponent = ({ name }) => {
  return (
    <p>
      Hello,{' '}
      <span style={{ borderBottom: '2px solid', color: 'red' }}>{name}</span>{' '}
      component.
    </p>
  );
};
export default CommonComponent;
