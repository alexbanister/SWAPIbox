import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = ({ favCount }) => {
  return (
    <div className='header'>
      <a href="/"><img src={logo} alt='logo' /></a>
      <nav>
        <NavLink
          to='/people'
          activeClassName="active">People</NavLink>
        <NavLink
          to='/planets'
          activeClassName="active">Planets</NavLink>
        <NavLink
          to='/vehicles'
          activeClassName="active">Vehicles</NavLink>
        <NavLink
          to='/favorites'
          activeClassName="active">Favorites <i>({favCount})</i></NavLink>
      </nav>
    </div>
  );
};

Header.propTypes = {
  favCount: PropTypes.number
};

export default Header;
