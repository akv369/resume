import Header from './sections/header';
import Footer from './sections/footer';
import Skills from './sections/skills';
import Education from './sections/education';
import WorkExp from './sections/workexp';
import Projects from './sections/projects';
import Achievements from './sections/achievements';
import ExtraCurr from './sections/extracurr';
import { Row, Col } from 'react-bootstrap';

import './App.scss';

function App() {
  return (
    <div className="resume">
      <Header />
      <Row>
        <Col xs={8}>
          <WorkExp />
          <Projects />
        </Col>
        <Col xs={4}>
          <Education />
          <Skills />
          <Achievements />
          <ExtraCurr />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
