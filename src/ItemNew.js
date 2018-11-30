import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from './config/api.js'

class ItemNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        checkbox: '',
        items: '',
        amount: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const newItem = { ...this.state.item, [event.target.name]: event.target.value }
    this.setState({item: newItem})
  }
  
  async handleSubmit(event) {
    event.preventDefault()
    const itemParams = {item: this.state.item}
    const response = await axios.post(`${API_BASE_URL}/list`, itemParams)
    this.props.history.push('/list/' + response.data.item.id)
  }

  render() {
    return(
      <React.Fragment>
        <h1>Add an item to the list!</h1>
        <form>
          <label htmlFor="checkbox">checkbox</label>
          <input id="checkbox" name="checkbox" type="text" value={this.state.item.checkbox} onChange={this.handleChange} />
          <label htmlFor="items">Item</label>
          <input id="items" name="items" type="text" value={this.state.item.items} onChange={this.handleChange} />
          <label htmlFor="amount">Quantity</label>
          <input id="amount" name="amount" type="text" value={this.state.item.amount} onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </React.Fragment>
    )
  }

}

export default ItemNew