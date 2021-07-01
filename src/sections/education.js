import '../styles/common.scss';
import utils from '../utils';
import { BsCalendar } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

function Education() {
  const data = utils.educationData;
  return (
    <div className="section">
      <div className="section-header">Education</div>
      <div className="section-data">
        {data.map((item, index) => {
          const scoreString =
            item.score >= 10 ? item.score + '%' : item.score + '/10';
          return (
            <div key={index} className="data-item education">
              <div className="item-header">
                <div className="edu-type">{item.type}</div>
                <div className="edu-name">{item.name}</div>
              </div>
              <div className="item-sub-header">
                <span>
                  <BsCalendar />
                  {item.ended}
                </span>
                <span>
                  <GoLocation />
                  {item.location}
                </span>
              </div>
              <div className="item-list">Score: {scoreString}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
