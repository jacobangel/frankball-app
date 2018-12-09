import React, { useState } from 'react';

import { FormationPicker } from '../components/FormationPicker';

export const FormationPanel = (props) => {
  return (
    <div>
      <FormationPicker chosenFormation={null} formations={props.formations} />
    </div>
  );
};

export default { FormationPanel };