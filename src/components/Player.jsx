import React from 'react';
import './Player.css';

const Icon = (props) => {
  const {
    initial, src
  } = props;
  return (
    <div className="icon">
      <div className="icon-inner">
        {src && <img src={src} />}
        <span>{initial}</span>
      </div>
    </div>
  );
}

export const Player = (props) => {
  const {
    name,
    id,
    timePlayed,
    src,
    onField,
    onUpdateAssist,
    onUpdateGoal,
  } = props;
  let date = new Date(null);
  date.setMilliseconds(timePlayed);
  let timeString = date.toISOString().substr(11).slice(0, -1)

  return (
    <article className="Player" key={id}>
      <Icon initial={name[0] || 'U'} src={src} />
      <span className="field">{name}</span>
      <span className="field">{timeString}</span>
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
      <span className="field">
        {onField ? 'In Play!' : 'Benched'}
      </span>
    </article>
  );
}

Player.defaultProps = {
  onUpdateGoal: () => { console.log('onUpdateGoal'); },
  onUpdateAssist: () => { console.log('onUpdateAssist'); },
}