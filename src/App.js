import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import Home from './Home.js'
import ShowAllItem from './grocery/components/showAllItem'
import AddItem from './grocery/components/addItem'
import EditItem from './grocery/components/editItem'
import Landing from './Landing.js'
import Map from './Map.js'
import Card from './Card.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 1500)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <Route exact path="/Landing" component={Landing} />
          <AuthenticatedRoute user={user} exact path='/' render={() => (
            <Home flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists' render={() => (
            <ShowAllItem flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists/new' render={() => (
            <AddItem flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists/:id/edit' render={() => (
            <EditItem flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/Map' render={() => (
            <Map flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/Card' render={() => (
            <Card flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
