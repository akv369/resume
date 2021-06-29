import './common.scss';

function Skills() {
  const data = ['react', 'node', 'mongo'];
  return (
    <div className="section">
      <div className="section-header">Skills</div>
      <div className="section-data">
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
