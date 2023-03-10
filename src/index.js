import React from 'react';
import ReactDOM from 'react-dom/client';
import AddRemoveButton from './components/Buttons/addRemoveButton'
import CycleLife from './components/CycleLife/cycleLife';
import Member from './components/Member/member';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddRemoveButton/>
    <hr/>
    <CycleLife/>
    <hr/>
    <Member/>
  </React.StrictMode>
);