import React , {useEffect} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faUserPlus, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';

const Navbar = () => {

  return (
    <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
          <span class="link-text logo-text nav-link">Fireship</span>
        <FontAwesomeIcon icon={faAppleAlt} />
      </li>

      <li class="nav-item">
        <Link className='nav-link' to='/employee'>
        <FontAwesomeIcon icon={faUsers} />
          <span class="link-text">Employee</span>
          </Link>
      </li>

      <li class="nav-item">
        <Link className='nav-link' to='/admin'>
        <FontAwesomeIcon icon={faUser} />
          <span class="link-text">Admins</span>
          </Link>
      </li>
      <li class="nav-item">
      <button className="btn-add" id="openModal">
        <FontAwesomeIcon icon={faUserPlus} />
          <span class="link-text">Add User</span>
          </button>
      </li>
    </ul>
  </nav>
  )
}
export default Navbar;