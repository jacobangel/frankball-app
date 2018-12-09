import React, { useState } from 'react';

import { PlayerList } from '../components/PlayerList';
import { AddPlayer } from '../components/AddPlayer';
export const PlayerPanel = (props) => {
  const [ showAdder, setShowAdder ] = useState(false);
  if (showAdder) {
    return (
      <div>
        <AddPlayer onFinish={() => { setShowAdder(false)}} />
      </div>
    )
  }

  return (
    <div>
      <PlayerList
        players={
          [
            { id: '1', name: 'Jake A.', timePlayed: Date.now(), onField: true }
          ]
        }

        onAddPlayer={() => { setShowAdder(true)}}
      />
    </div>
  );
};
export default { PlayerPanel };