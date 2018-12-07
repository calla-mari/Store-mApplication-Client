import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { handleErrors, addItem } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

import './form.scss'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      grocery_list: {
        store: this.props.store,
        // checkbox: '',
        department: this.props.department,
        item: '',
        amount: ''
      },
      new: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const addItem = { ...this.state.grocery_list, [event.target.name]: event.target.value }
    this.setState({grocery_list: addItem})
  }

  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  addItem = event => {
    event.preventDefault()

    const { grocery_list } = this.state
    const { flash, history, user } = this.props

    addItem(grocery_list, user)
      .then(handleErrors)
      .then(() => flash(messages.createSuccess, 'flash-success'))
      .then(() => {
        this.setState({ new: true })
      })
      .catch(() => flash(messages.createFail, 'flash-error'))
  }

  render () {
    if (this.state.new === true) {
      return <Redirect to='/Map' />
    }
    const { store, checkbox, department, item, amount } = this.state.grocery_list
    return (
      <form className='userForm' onSubmit={this.addItem}>
        <h3>Add An Item</h3>
        {/* <input 
        <label htmlFor="checkbox">checkbox</label>
          id="checkbox" 
          name="checkbox" 
          type="boolean" 
          value={checkbox} 
          onChange={this.handleChange} 
        /> */}
        {/* <Checkbox 
          id="checkbox" 
          name="checkbox" 
          // options={list} 
          // checked={this.state.active}
          value={checkbox} 
          onClick={this.handleChange} 
        /> */}
        {/* <label htmlFor="department">Department</label>
        <input 
          required
          id="department" 
          name="department" 
          type="text" 
          value={department} 
          onChange={this.handleChange} 
        /> */}
        <label htmlFor="item">Item</label>
        <input 
          required
          id="item" 
          name="item" 
          type="text" 
          value={item} 
          onChange={this.handleChange} 
        />
       
        <label htmlFor="amount">Quantity</label>
        <input 
          id="amount" 
          name="amount" 
          type="number"
          value={amount} 
          onChange={this.handleChange} 
        />
        <Button type="submit">Add Item</Button>
      </form>
    )
  }
}

export default withRouter(AddItem)
