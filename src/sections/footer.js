import './common.scss';
import { Row, Col } from 'react-bootstrap';
import { IoMdCall } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
  const data = [
    {
      text: '+91-9953-654575',
      icon: <IoMdCall />,
      link: 'tel:+91-9953-654575',
    },
    {
      text: 'LinkedIn/akv369',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/akv369/',
    },
    {
      text: 'akash.vashisht99@gmail.com',
      icon: <FiMail />,
      link: 'mailto:akash.vashisht99@gmail.com',
    },
  ];
  return (
    <Row>
      {data.map((item, index) => {
        return (
          <Col id={index}>
            <a href={item.link}>
              {item.icon}
              {item.text}
            </a>
          </Col>
        );
      })}
    </Row>
  );
}

export default Footer;
