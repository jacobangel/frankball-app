import React from 'react';
import { Player } from './Player';
import './PlayerList.css';

const sortPlayers = (players) => {
  const inP = [];
  const outP = [];
  for (let player of players) {
    if (player.onField) {
      inP.push(player);
    } else {
      outP.push(player);
    }

  }
  return [inP, outP];
};

export const PlayerList = (props) => {
  const {
    players,
    onAddPlayer
  } = props;
  const [ inPlayers, outPlayers ] = sortPlayers(players);
  return (
    <div className="player-list">
      <header>
        <h1>Players</h1>
      </header>
      <section>
        <ol>
          <li>
            <span className="field"></span>
            <span className="field">Name</span>
            <span className="field">Time on Field</span>
            <span className="field">Goals</span>
            <span className="field">Assists</span>
            <span className="field">In Play?</span>
          </li>
        {inPlayers.map((playerProps, i) => {
          return <li key={playerProps.id}><Player {...playerProps} /></li>
        })}
        {outPlayers.map((playerProps, i) => {
          return <li key={playerProps.id}><Player {...playerProps} /></li>
        })}
        <li><button onClick={onAddPlayer}>Add Player</button></li>
        </ol>
      </section>
    </div>
  );
}

PlayerList.defaultProps = {
  onAddPlayer: () => { console.log('onAddPlayer'); },
};