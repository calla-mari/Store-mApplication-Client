import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/">
      <Button type="primary" shape="circle" icon="home" />
    </Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">
      <button type="button">Sign Up</button>
    </Link>
    <Link to="/sign-in">
      <Button type="primary">Sign In</Button>
    </Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Grocery Store mApp</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
