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
import Store from './Store.js'
import Map from './Map.js'
import WDI from './WDI027.js'

const stores = [
  {name: 'MarketBasket', image: 'https://i.imgur.com/4MmHhtO.jpg', abbrev: 'MB'},
  {name: 'WholeFoods', image: 'https://i.imgur.com/Oibd8or.jpg', abbrev: 'WF'},
  // {name: 'StarMarket', image: 'https://s3.amazonaws.com/s3.wodsfm.radio.com/styles/delta__775x515/s3/Star.jpg?itok=YeZtXDbB', abbrev: 'SM'},
  {name: 'Costco', image: 'http://miami-water.com/blog/wp-content/uploads/2012/06/Costco-Logo.jpg', abbrev: 'Cs'}
]

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      store: '',
      department: ''
    }
  }

  setUser = user => this.setState({ user })
  setStore = store => this.setState({ store })
  setDepartment = department => this.setState({ department })

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
          <Route user={user} exact path='/' render={() => (
            <Home flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists' render={() => (
            <ShowAllItem flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists/new' render={() => (
            <AddItem flash={this.flash} user={user} department={this.state.department} store={this.state.store}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/grocery_lists/:id/edit' render={() => (
            <EditItem flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/Store' render={() => (
            <Store flash={this.flash} user={user} updateStore={this.setStore} stores={stores} />
          )} />
          <AuthenticatedRoute user={user} exact path='/Map' render={() => (
            <Map flash={this.flash} user={user} updateStore={this.setStore} updateDept={this.setDepartment} store={this.state.store} />
          )} />
          <AuthenticatedRoute user={user} exact path='/WDI' render={() => (
            <WDI flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
