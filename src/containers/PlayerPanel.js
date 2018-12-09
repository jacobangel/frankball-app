import React from 'react';

import { PlayerList } from '../components/PlayerList';

const PlayerRoot = (props) => {
  return (
    <div>
      <PlayerList
        players={
          [
            { id: '1', name:'Jake A.', timePlayed: Date.now(), onField: true}
          ]
        }
      />
    </div>
  )
};

export const PlayerPanel = PlayerRoot;