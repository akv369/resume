import '../styles/common.scss';
import utils from '../utils';

function Footer() {
  const data = utils.footerData;
  return (
    <div className="footer">
      {data.map((item, index) => {
        return (
          <span id={index}>
            <a href={item.link}>
              {item.icon}
              {item.text}
            </a>
          </span>
        );
      })}
    </div>
  );
}

export default Footer;
