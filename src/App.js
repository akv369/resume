import Header from './sections/header';
import Footer from './sections/footer';
import Skills from './sections/skills';
import Education from './sections/education';
import WorkExp from './sections/workexp';
import Projects from './sections/projects';
import Achievements from './sections/achievements';
import ExtraCurr from './sections/extracurr';
import { Row, Col } from 'react-bootstrap';

import './styles/App.scss';
import utils from './utils';

function App() {
  return (
    <div className="resume">
      <Header />
      <Row>
        <Col xs={8}>
          <WorkExp />
          <Projects />
          <div className="project-list">
            Other Projects:{' '}
            {utils.otherProjects.map((project) => {
              return (
                <span key={project} class="list-item">
                  {project}
                </span>
              );
            })}
          </div>
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
