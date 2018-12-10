import React, { useState, useEffect } from 'react';
import { DropTarget } from 'react-dnd';

import './Formation.css';

import { formations } from '../constants/fakeData';

export const Formation = (props) => {
  return (
    <div className="Formation">
      {props.data.map((row, i) => {
        const arr = new Array(row).fill('');
        return (
          <div className="row" style={{
            bottom: (i * 100 + 80) + 'px',
          }}>
            {arr.map((x, j) => {
              return (
                <figure className="dot" style={{
                  left: `calc(${j + 1} * ${props.width} / ${row + 1} - 50px)`
                }}>
                  .
                </figure>
              );
            }
            )}
          </div>
        )
      })}
        <div className="row" style={{
          bottom: `40px`
        }}>
          <figure className="dot" style={{
             left: `calc(50% - 50px)`,
          }}> . </figure>
        </div>
    </div>
  )
}