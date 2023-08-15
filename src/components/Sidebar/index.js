import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/psk-logo.png';
import LogoSubtitle from '../../assets/images/prachi.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faDev, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/PSK_Portfolio'>
                <img src={LogoS} alt="logo"></img>
                <img src={LogoSubtitle} alt="logo"></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#d7cec7"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#d7cec7"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#d7cec7"></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/prachi-kane-b50134181'>
                        <FontAwesomeIcon icon={faLinkedin} color="#d7cec7"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/prachikane'>
                        <FontAwesomeIcon icon={faGithub} color="#d7cec7"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://devpost.com/pxk220024'>
                        <FontAwesomeIcon icon={faDev} color="#d7cec7"></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;