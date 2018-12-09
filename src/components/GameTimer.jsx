import React, { useState, useEffect } from 'react';

export const GameTimer = (props) => {
  let {
    onPause, onStart, onReset, time, isPaused
  } = props;
  let date = new Date(null);
  date.setMilliseconds(time);
  let timeString = date.toISOString().substr(11).slice(0, -1)

  return (
    <div>
      <span>Game Time: {timeString}</span>
      {isPaused ?
        <button onClick={onStart}>Start</button> :
        <button onClick={onPause}>Pause</button>
      }
      <button onClick={onReset}>Reset</button>
    </div>
  );
}