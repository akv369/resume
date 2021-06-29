import './common.scss';

function Education() {
  const data = [
    {
      name: 'Shri Mata Vaishno Devi University',
      type: 'B. Tech',
      ended: 2022,
      location: 'Katra',
      score: 7.3,
    },
    {
      name: 'S. D. Adarsh Vidyalaya',
      type: 'XII',
      ended: 2018,
      location: 'Gurugram',
      score: 83.8,
    },
    {
      name: 'S. D. Adarsh Vidyalaya',
      type: 'X',
      ended: 2016,
      location: 'Gurugram',
      score: 9,
    },
  ];
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
                {item.type} from {item.name}
              </div>
              <div className="item-sub-header">
                <span>{item.ended}</span>
                <span>{item.location}</span>
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
