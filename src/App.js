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
      <Profile text={myInfo.name}/>
      <Contact text={myInfo.contact}/>
      <Education text={myInfo.education}/>
      <Skills text={myInfo.languages}/>
      <WorkHistory text={myInfo.jobExp}/>
    </div>
  );
}

export default App;
