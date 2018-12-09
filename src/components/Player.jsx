import React from 'react';

const Icon = (props) => {
  const {
    initial, src
  } = props;
  return (
    <div className="icon">
      {src && <img src={src} />}
      <span>{initial}</span>
    </div>
  );
}

export const Player = (props) => {
  const {
    name,
    id,
    timePlayed,
    src,
    onAddGoal
  } = props;

  return (
    <article key={id}>
      <Icon initial={name[0] || 'U'} src={src} />
      <span>{name}</span>
      <span>{timePlayed}</span>
      <span>
        <button onClick={onAddGoal}>+</button>
      </span>
    </article>
  );
}

Player.defaultProps = {
  onAddGoal: () => { console.log('onAddGoal'); },
}