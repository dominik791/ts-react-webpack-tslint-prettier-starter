import * as React from 'react';
import * as _ from 'lodash';

const apples = _.fill([1,2,3], 'apple');

const ModuleOne: React.FC<{}> = () => (
  <div>
    <div>ModuleOne</div>
    <div>There are {apples.length} apples</div>
  </div>
)

export default ModuleOne;
