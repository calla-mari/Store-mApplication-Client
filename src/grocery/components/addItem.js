import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { handleErrors, addItem } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import { Checkbox } from 'antd'
import { Switch } from 'antd'
import Icon from '@material-ui/core/Icon'

class AddItem extends Component {
  constructor () {
    super()

    this.state = {
      grocery_list: {
        checkbox: '',
        department: '',
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
    console.log(this.state.grocery_list)
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
      return <Redirect to='/grocery_lists' />
    }
    const { checkbox, department, item, amount } = this.state.grocery_list
    return (
      <form className='create' onSubmit={this.addItem}>
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
        <label htmlFor="department">Department</label>
        <input 
          required
          id="department" 
          name="department" 
          type="text" 
          value={department} 
          onChange={this.handleChange} 
        />
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
        <button type="submit">Add Item</button>
      </form>
    )
  }
}

export default withRouter(AddItem)
