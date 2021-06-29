import './common.scss';

function WorkExp() {
  const data = [
    {
      name: 'LrnEd Technologies Pvt. Ltd.',
      designation: 'Software Development Intern',
      started: 'March 2021',
      work: ['hey', 'i', 'dont', 'know'],
    },
    {
      name: 'FilterShalla',
      designation: 'Technical Head',
      started: 'July 2021',
      ended: 'Aug 2021',
      work: ['hey', 'i', 'dont', 'know'],
    },
  ];
  return (
    <div className="section">
      <div className="section-header">Work Experience</div>
      <div className="section-data">
        {data.map((item, index) => {
          return (
            <div key={index} className="data-item workExp">
              <div className="item-header">
                <span>{item.name}</span>
                <span>{`(${item.started} - ${item.ended || 'Present'})`}</span>
              </div>
              <div className="item-designation">{item.designation}</div>
              <ul className="item-details">
                {item.work.map((point, index) => {
                  return (
                    <li key={index} className="item-point">
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExp;
