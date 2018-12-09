import React, { useState } from 'react';

import { addPlayer } from "../state/actions";

export const AddPlayer = (props) => {
  const { onFinish } = props;
  const [name, setName] = useState('Jake');
  const [number, setNumber] = useState('8');
  return (
    <div>
      <span>
        <label>Name</label>
        <input type="text" value={name} onInput={(e) => setName(e.value)} />
      </span>
      <span>
        <label>Number</label>
        <input type="text" value={number} onInput={(e) => setNumber(e.value)} />
      </span>
      <span>Upload Image</span>
      <button onClick={onFinish}>Cancel</button>
      <button onClick={(e) => {
        addPlayer({ name, number });
        onFinish();
      }}>Save</button>
    </div>
  );
};

