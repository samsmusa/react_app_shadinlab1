import React , {useEffect} from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faUserPlus, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';

const Navbar = () => {
  const navLinkStyles = ({isActive})=>{
    return {
      backgroundColor: isActive ? 'red':'blue'
    }
  }

  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo"><NavLink className='nav-link' to='/'>
          <p className=" logo-text nav-link">Ledger</p>
        <FontAwesomeIcon icon={faAppleAlt} /></NavLink>
      </li>

      <li  className="nav-item">
        <NavLink style={navLinkStyles} className='nav-link' to='/employee'>
        <FontAwesomeIcon icon={faUsers} />
          <span className="link-text">Employee</span>
          </NavLink>
      </li>

      <li  className="nav-item">
        <NavLink style={navLinkStyles} className='nav-link' to='/admin'>
        <FontAwesomeIcon icon={faUser} />
          <span className="link-text">Admins</span>
          </NavLink>
      </li>
      <li className="nav-item item-btn">
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