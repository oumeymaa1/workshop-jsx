import React from 'react';
import './App.css';
import FullName from './Profile/FullName';
import Adresse from './Profile/Adresse';
import ProfilePhoto from './Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Adresse/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
