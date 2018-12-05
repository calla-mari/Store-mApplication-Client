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
import Icon from '@material-ui/core/Icon'
import Chip from '@material-ui/core/Chip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

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
				const { id, checkbox, department, item, amount } = grocery_list
				const link = {
					pathname: `/grocery_lists/${id}/edit`,
          grocery_listsParams: [id, checkbox, department, item, amount]
        }
        return (
				
					<TableRow className="itemTable" key={id}>
						<TableCell padding="checkbox">
							<Checkbox />
						</TableCell>
						<TableCell>
							{department}
						</TableCell>
						<TableCell>
							{item}
						</TableCell>
						<TableCell>
							{amount}
						</TableCell>
						<TableCell>
							<Link to={link}>
								<Icon>edit</Icon>
							</Link>
							<Icon onClick={this.deleteItem} id={id}>delete</Icon>
						</TableCell>
					</TableRow>
        )
      })
    }
		
		
		const styles = theme => ({
			root: {
				width: '100%',
				marginTop: theme.spacing.unit * 3,
				overflowX: 'auto',
			},
			table: {
				minWidth: 700,
			},
		})
		
    return(
				<div>
					<h1>What do I need to buy?</h1>
					<Link to='/grocery_lists/new' replace >
						<Button type="primary">Add An Item</Button>
					</Link>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell>Department</TableCell>
									<TableCell>Item</TableCell>
									<TableCell>Amount</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableHead>
							<TableBody className="itemTable">
								{itemRows}
							</TableBody>
						</Table>
					</Paper>
				</div>
		)
	}
}

export default ShowAllItem