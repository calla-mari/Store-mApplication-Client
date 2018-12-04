/* eslint-disable react/jsx-key */
/* eslint-disable indent */
import React, { Component }  from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from '../../config/api.js'
import { Button } from 'antd'
import { handleErrors, showAllItem, onDeleteItem } from '../api'
import messages from '../messages'
import { Table } from 'antd'
import Icon from '@material-ui/core/Icon'
import Chip from '@material-ui/core/Chip'

class ShowAllItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			grocery_lists: [],
			deleted: false
		}
		this.deleteItem = this.deleteItem.bind(this)
  }

  async componentDidMount() {

		const { flash, history, user } = this.props 

		showAllItem(user)
		.then(handleErrors)
		.then((response)=> {
			return response.json()
		})
		.then((response)=>{
			return this.setState({grocery_lists: response.grocery_lists})
		})
		.then(() => flash(messages.showSuccess, 'flash-success'))
		.catch(() => flash(messages.showFail, 'flash-error'))
	}

	deleteItem = event => {
    const { user } = this.props
		const id = event.target.getAttribute('id')
		console.log(event.target)

		onDeleteItem(id, user)
			.then(() => {
				this.componentDidMount()
			})
			// .then(() => flash(messages.showSuccess, 'flash-success'))
			// .catch(() => flash(messages.showFail, 'flash-error'))
  }
	

  render() {
    let itemRows
		const { grocery_lists } = this.state
    
    if (grocery_lists.length === 0) {
      itemRows = <tr><td>You have no items in you list</td></tr>
    } else {
      itemRows = grocery_lists.map(grocery_list => {
				const { id, checkbox, item, amount } = grocery_list
				const link = {
          pathname: `/grocery_lists/${id}/edit`,
          grocery_listsParams: [id, checkbox, item, amount]
        }
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
						<td>
							<Link to={link}>
								<Icon>edit</Icon>
							</Link>
							<Icon onClick={this.deleteItem} id={id}>delete</Icon>
						</td>
					</tr>
        )
      })
    }

    return(
      <React.Fragment>
        <h1>What do I need to buy?</h1>
        <Link to='/grocery_lists/new' replace >
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