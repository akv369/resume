import '../styles/common.scss';
import utils from '../utils';

function ExtaCurr() {
  const data = utils.extraCurricularData;
  return (
    <div className="section">
      <div className="section-header">Extra Curricular Activities</div>
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

export default ExtaCurr;
