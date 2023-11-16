import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Profile from './components/Profile';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import myInfo from './models/myinfo';

function App() {
  return (
    <div className="App">
      <div className="Profile">
        <Profile text={myInfo.name} />
      </div>
      <div className="Contact">
        <Contact text={myInfo.contact} />
      </div>
      <div className="Labels">{myInfo.sections[0]}</div>
      <div className="Education">
        <Education text={myInfo.education} />
      </div>
      <div className="Labels">{myInfo.sections[1]}</div>
      <div className="Skills">
        <Skills text={myInfo.languages} />
      </div>
      <div className="Labels">{myInfo.sections[2]}</div>
      <div className="Experience">
        <WorkHistory text={myInfo.jobExp} />
      </div>
    </div>
  );
}

export default App;
