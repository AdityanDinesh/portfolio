import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub_1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import{faGithub, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src ={LogoS} alt = "Logo"/>
            <img className='sub-logo' src ={LogoSubtitle} alt = "Logosubtitle"/>
        </Link>
        <nav>
            <NavLink exact = "true" activexlassname = "active" to = "/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activexlassname = "active" className="about-link" to = "/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activexlassname = "active" className="contact-link" to = "/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/adityan-dinesh-37214b1a4/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/AdityanDinesh'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/___dinesh_adityan.___/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/dinesh__adityan'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
