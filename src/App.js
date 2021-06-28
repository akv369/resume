import Header from './sections/header'
import Footer from './sections/footer'
import Skills from './sections/skills'
import WorkExp from './sections/workexp'
import Projects from './sections/projects'
import Achievements from './sections/achievements'
import ExtraCurr from './sections/extracurr'

import './App.scss';

function App() {
  return (
    <div className="resume">
      <Header/>
      <Footer />
      <Skills />
      <WorkExp />
      <Projects />
      <Achievements />
      <ExtraCurr />
    </div>
  );
}

export default App;
