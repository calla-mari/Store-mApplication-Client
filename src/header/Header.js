import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/Store">
      <Icon>home</Icon>
    </Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>

  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <Link className="logo-header" to="/grocery_lists">
      <img
        src={require('./cart.png')}
        className='logo' />
    </Link>
    <Link className="logo-header" to="/Store">
      <h1>Store mApp</h1>
    </Link>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
