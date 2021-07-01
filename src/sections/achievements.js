import '../styles/common.scss';
import utils from '../utils';

function Achievements() {
  const data = utils.achievementData;
  return (
    <div className="section">
      <div className="section-header">Achievements</div>
      <div className="section-data">
        <ul className="other-list">
          {data.map((item, index) => {
            return (
              <li key={index} className="list-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
