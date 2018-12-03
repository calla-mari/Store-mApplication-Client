import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, addItem } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import { Checkbox } from 'antd'
import { Switch } from 'antd'

class AddItem extends Component {
  constructor () {
    super()

    this.state = {
      grocery_list: {
        checkbox: '',
        item: '',
        amount: ''
      }
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
      .then(() => history.push('/'))
      .catch(() => flash(messages.createFail, 'flash-error'))
  }

  render () {
    const { checkbox, item, amount } = this.state.grocery_list
    return (
      <form className='create' onSubmit={this.addItem}>
        <h3>Add An Item</h3>
        <label htmlFor="checkbox">checkbox</label>
        {/* <input 
          id="checkbox" 
          name="checkbox" 
          type="boolean" 
          value={checkbox} 
          onChange={this.handleChange} 
        /> */}
        <Checkbox 
          id="checkbox" 
          name="checkbox" 
          // options={list} 
          // checked={this.state.active}
          value={checkbox} 
          onClick={this.handleChange} 
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
