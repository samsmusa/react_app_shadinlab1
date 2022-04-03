import React , {useEffect} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faUserPlus, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';

const Navbar = () => {

  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
          <span className="link-text logo-text nav-link">Ledger</span>
        <FontAwesomeIcon icon={faAppleAlt} />
      </li>

      <li className="nav-item">
        <Link className='nav-link' to='/employee'>
        <FontAwesomeIcon icon={faUsers} />
          <span className="link-text">Employee</span>
          </Link>
      </li>

      <li className="nav-item">
        <Link className='nav-link' to='/admin'>
        <FontAwesomeIcon icon={faUser} />
          <span className="link-text">Admins</span>
          </Link>
      </li>
      <li className="nav-item">
      <button className="btn-add" id="openModal">
        <FontAwesomeIcon icon={faUserPlus} />
          <span className="link-text">Add User</span>
          </button>
      </li>
    </ul>
  </nav>
  )
}
export default Navbar;