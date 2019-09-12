import * as React from 'react';
import * as R from 'ramda';

const cherries = [1,2,3];

const ModuleTwo: React.FC<{}> = () => (
  <div>
    <div>ModuleTwo</div>
    <div>There are {R.length(cherries)} cherries</div>
  </div>
)

export default ModuleTwo;
