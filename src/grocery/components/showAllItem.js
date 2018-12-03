/* eslint-disable indent */
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from '../../config/api.js'
import { Button } from 'antd'
import { handleErrors, showAllItem } from '../api'
import messages from '../messages'

class ShowAllItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grocery_lists: []
    }
  }

  async componentDidMount() {
		event.preventDefault()

		const { flash, history, user } = this.props 

		// const response = await axios.get('http://localhost:4741/grocery_lists')
		// this.setState({grocery_lists: response.grocery_lists})
		// console.log(response)

		showAllItem(user)
		.then(handleErrors)
		.then((response)=> {
			return response.json()
		})
		.then((response)=>{
			console.log(response)
			return this.setState({grocery_lists: response.grocery_lists})
		})
		.then(() => flash(messages.showSuccess, 'flash-success'))
		.catch(() => flash(messages.showFail, 'flash-error'))
  }
	
  // async deleteItem(event) {
  //   const { id } = this.props.match.params
  //   const response = await axios.delete(`${API_BASE_URL}/grocery_lists/${id}`)
  //   this.setState({deleted: true})
  // }

  render() {
    let itemRows
		const { grocery_lists } = this.state
    
    if (grocery_lists.length === 0) {
      itemRows = <tr><td>You have no items in you list</td></tr>
    } else {
      itemRows = grocery_lists.map(grocery_list => {
        const { id, checkbox, item, amount } = grocery_list
        return (
          <tr key={id}>
            <td>
							{checkbox}
						</td>
						<td>
							{item}
						</td>
						<td>
							{amount}
						</td>
          </tr>
        )
      })
    }

    return(
      <React.Fragment>
        <h1>What do I need to buy?</h1>
        <Link to='/items/new'>
          <Button type="primary">Add An Item</Button>
        </Link>
        <table>
          <tbody>
            {itemRows}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default ShowAllItem