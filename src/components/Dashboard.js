import React, { useState } from 'react';
import { Counter } from './Counter';

const Score = (props) => {
  const [ home, away ] = props.score;

  return (
    <div className="Score">
      <span className="Score--home">{home}</span>
      <span className="separator">-</span>
      <span className="Score--away">{away}</span>
    </div>
  )

};

Score.defaultProps = {
  score: [0, 0]
}

export const Dashboard = (props) => {
  const [ score, setScore ] = useState([0, 0]);
  return (
    <div>
      <Score score={score} />
      <Counter label="Home" reportCount={(val) => {
        let currScore = [...score ];
        currScore[0] = val;
        setScore(currScore);
      }} />
      <Counter label="Away" reportCount={val => {
        console.log('away!', val);
        let currScore = [...score ];
        currScore[1] = val;
        setScore(currScore);
      }} />
    </div>
  );
};

export default { Dashboard };