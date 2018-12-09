import React, { useState, useEffect } from 'react';
import { Counter } from './Counter';
import { GameTimer } from './GameTimer';
import { ScoreBoard } from './ScoreBoard';

import './Dashboard.css';

let ref = null;

export const Dashboard = (props) => {
  const [ score, setScore ] = useState([0, 0]);
  const [ currentTime, setTime ] = useState(0);
  const [ isPaused, setPause ] = useState(true);
  useEffect(() => {
    ref = setInterval(() => {
      if (!isPaused) {
        setTime(currentTime + 100);
      }
    }, 100);
    return function cleanup() {
       clearInterval(ref);
    }
  })
  return (
    <div>
      <ScoreBoard score={score} />
      <Counter label="Home" reportCount={(val) => {
        let currScore = [...score ];
        currScore[0] = val;
        setScore(currScore);
      }} />
      <Counter label="Away" reportCount={val => {
        let currScore = [...score ];
        currScore[1] = val;
        setScore(currScore);
      }} />
      <GameTimer
        isPaused={isPaused}
        time={currentTime}
        onPause={() => {
          setPause(true);
        }}
        onReset={() => {
          setPause(true);
          setTime(0);
        }}
        onStart={() => {
          setPause(false);
        }}
      />
    </div>
  );
};

export default { Dashboard };