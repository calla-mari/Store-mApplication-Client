/* eslint-disable indent */
import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from '../../config/api.js'

import { handleErrors, onEditItem } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import { Checkbox } from 'antd'
import { Switch } from 'antd'

class EditItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      grocery_list: {
        checkbox: '',
        item: '',
        amount: ''
      },
      edited: false
		}
		
    this.handleChange = this.handleChange.bind(this)
    this.editItem = this.editItem.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const editItem = { ...this.state.grocery_list, [event.target.name]: event.target.value }
    this.setState({grocery_list: editItem})
  }
  
  editItem(event) {
    event.preventDefault()

    const edited = {
        checkbox: this.state.grocery_list.checkbox,
        item: this.state.grocery_list.item,
        amount: this.state.grocery_list.amount
      }

    onEditItem(this.props.match.params.id, edited, this.props.user)

      .then(handleErrors)
      .then((response)=> {
        return response.json()
      })
      .then((response)=>{
        return this.setState({grocery_lists: response.grocery_lists})
      })
      // .then(() => flash(messages.editSuccess, 'flash-success'))
      .then(() => {
        this.setState({ edited: true })
      })
      // .catch(() => flash(messages.editFail, 'flash-error'))
    }

  render () {
    if (this.state.edited === true) {
      return <Redirect to='/grocery_lists' />
    }
    const { checkbox, item, amount } = this.state.grocery_list
    return (
      <form className='edit' onSubmit={this.editItem}>
        <h3>Update Item</h3>
        <label htmlFor="checkbox"></label>
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
          placeholder={item} 
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
        <button variant="contained" type="sumbit" className="button">Edit Item</button>
      </form>
    )
  }
}

export default withRouter(EditItem)