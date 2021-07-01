import '../styles/common.scss';
import utils from '../utils';

function Skills() {
  const data = utils.skillsData;
  return (
    <div className="section">
      <div className="section-header">Skills</div>
      <div className="section-data skills">
        {data.map((item, index) => {
          return (
            <span key={index} className="skill-item">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
