import './common.scss';

function Projects() {
  const data = [
    {
      name: 'Stonks',
      started: 'Jan 2021',
      ended: 'May 2021',
      work: ['hey', 'i', 'dont', 'know'],
      techs: ['hey', 'i', 'know'],
    },
    {
      name: 'Burger Builder',
      started: 'Mar 2020',
      ended: 'Apr 2020',
      work: ['hey', 'i', 'dont', 'know'],
      techs: ['hey', 'i', 'know'],
    },
    {
      name: 'Kal Exam Hai',
      started: 'Nov 2019',
      work: ['hey', 'i', 'dont', 'know'],
      techs: ['hey', 'i', 'know'],
    },
  ];
  return (
    <div className="section">
      <div className="section-header">Projects</div>
      <div className="section-data">
        {data.map((item, index) => {
          return (
            <div key={index} className="data-item project">
              <div className="item-header">
                <span>{item.name}</span>
                <span>{`(${item.started} - ${item.ended || 'Present'})`}</span>
              </div>
              <ul className="item-details">
                {item.work.map((point, index) => {
                  return (
                    <li key={index} className="item-point">
                      {point}
                    </li>
                  );
                })}
              </ul>
              <div className="item-list">
                Technologies Used:{' '}
                {item.techs.map((tech) => {
                  return (
                    <span key={tech} class="list-item">
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
