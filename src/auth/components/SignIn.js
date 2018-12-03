/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col, Icon } from 'antd'
import { signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

import './SignIn.scss'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h1>Let's spend some $$</h1>
          {/* <h4>Where will you go today?</h4> */}
        </div>
        <form className='auth-form-sign-in' onSubmit={this.signIn}>
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.2)' }} />}
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button variant="contained" type="sumbit" className="button">Sign In</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
