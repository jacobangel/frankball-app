import React, { useState, useEffect } from 'react';

export const ScoreBoard = (props) => {
  const [ home, away ] = props.score;

  return (
    <div className="Score">
      <span className="Score--home">{home}</span>
      <span className="separator">-</span>
      <span className="Score--away">{away}</span>
    </div>
  )

};

ScoreBoard.defaultProps = {
  score: [0, 0]
}