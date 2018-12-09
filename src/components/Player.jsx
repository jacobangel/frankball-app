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
    onUpdateAssist,
    onUpdateGoal,
  } = props;

  return (
    <article key={id}>
      <Icon initial={name[0] || 'U'} src={src} />
      <span className="field">{name}</span>
      <span className="field">{timePlayed}</span>
      <span className="field">
        <button onClick={() => { onUpdateGoal(+1) }}>+</button>
        /
        <button onClick={() => { onUpdateGoal(-1) }}>-</button>
      </span>
      <span className="field">
        <button onClick={() => { onUpdateAssist(+1) }}>+</button>
        /
        <button onClick={() => { onUpdateAssist(-1) }}>-</button>
      </span>
    </article>
  );
}

Player.defaultProps = {
  onUpdateGoal: () => { console.log('onUpdateGoal'); },
  onUpdateAssist: () => { console.log('onUpdateAssist'); },
}