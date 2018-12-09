import React, { Component } from 'react';
import { Dashboard } from '../components/Dashboard';
import Field from '../imgs/field.svg';

export const GameOverview = (props) => {
  return (
    <article>
      <div>
        <h1>Game!</h1>
        <img src={Field} />
      </div>
      <div>
        <Dashboard />
      </div>
    </article>
  );
}