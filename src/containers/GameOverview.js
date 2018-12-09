import React, { Component } from 'react';
import { Dashboard } from '../components/Dashboard';
import Field from '../imgs/field.svg';

export const GameOverview = (props) => {
  return (
    <article className="GameOverview">
      <div>
        <h1>Game!</h1>
        <div className="Field">
          <img src={Field} />
        </div>
      </div>
      <div>
        <Dashboard />
      </div>
    </article>
  );
}