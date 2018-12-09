import React, { useState } from 'react';

const Formation = (props) => {
  return (
    <div className="formation">
        {props.name}
    </div>
  )
}

export const FormationPicker = (props) => {
  let { formations, selectedFormation } = props;
  selectedFormation = selectedFormation || formations[0];
  console.log(formations);
  return (
    <div className="formation">
      <h1>Formations</h1>
      <section className="formation--list">
      {formations.map((formProps) => {
        return (
          <div key={formProps.id}>
            <Formation {...formProps} />
          </div>
        );
      })}
      </section>
    </div>
  );
}

FormationPicker.defaultProps = {
  formations: [
    { id: 1, name: "4-4-2"},
    { id: 2, name: "5-4-1"},
    { id: 3, name: "3-3-3"},
    { id: 4, name: "3-5-2"},
  ]
}