import React, { useState, useEffect } from 'react';
import { Formation } from './Formation';

import { DropTarget } from 'react-dnd';

import './Field.css';

import { formations } from '../constants/fakeData';

export const Field = (props) => {
  const {
    imgSrc,
    formation,
    height,
    width,
  } = props;

  return (
    <div className="Field-wrapper">
      <div className="Field">
        <img src={imgSrc} width={width} height={height} />
      <Formation
        data={formation}
        height={height}
        width={width}
      />
      </div>
    </div>
  );
};

Field.defaultProps = {
  width: '100%',
  height: '100%',
}