import '../styles/common.scss';
import utils from '../utils';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  const data = utils.projectData;
  return (
    <div className="section">
      <div className="section-header">Projects</div>
      <div className="section-data">
        {data.map((item, index) => {
          return (
            <div key={index} className="data-item project">
              <div className="item-header">
                <a href={item.link || ''}>
                  {item.name} {item.link ? <FiExternalLink /> : ''}
                </a>
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
