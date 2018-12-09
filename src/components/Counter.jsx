import React, { useState } from 'react';

import cx from 'classnames';

export const Counter = (props) => {
  const { reportCount, label } = props;
  const [count, setCount] = useState(props.startingCount || 0);
  const classes = cx('Counter', props.className);
  return (
    <span className={classes}>
      {label && <label>{label}</label>}
      <button onClick={() => {
        setCount(count + 1);
        reportCount(count + 1);
      }}>+</button>
      /
      <button onClick={() => {
        setCount(count - 1);
        reportCount(count - 1);
      }}>-</button>
      <button onClick={() => {
        setCount(0); reportCount(0);
        }}>
        Reset
      </button>
    </span>
  )
}

Counter.defaultProps = {
  startingCount: 0,
  reportCount: (count) => {
    console.log(count)
  }
}