import React, { Component } from 'react';
import { Dashboard } from '../components/Dashboard';
import { Field } from '../components/Field';
import fieldSVG from '../imgs/field.svg';

export const GameOverview = (props) => {

  const {
    players,
    formation,
    pfMap
  } = props;

  return (
    <article className="GameOverview">
      <div>
        <h1>Game!</h1>
      </div>
      <div>
        <Field
          imgSrc={fieldSVG}
          players={players}
          formation={formation}
          playerFormationMap={pfMap}
        />
        <Dashboard />
      </div>
    </article>
  );
}

GameOverview.defaultProps = {
  players: [],
  formation: [4, 4, 2],
  pfMap: [],
}