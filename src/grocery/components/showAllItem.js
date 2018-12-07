/* eslint-disable react/jsx-key */
/* eslint-disable indent */
import React, { Component }  from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import API_BASE_URL from '../../config/api.js'
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
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

import './showAll.scss'


const departmentTable = {
	MarketBasket: ['dairy', 'bread', 'cereal', 'can', 'meat',  'fruit', 'vegetable', 'frozen'],
	WholeFoods: ['vegetable', 'fruit', 'dairy', 'meat', 'frozen',  'bread', 'can', 'cereal'],
	// StarMarket: ['dairy', 'bread', 'cereal', 'can', 'meat',  'fruit', 'vegetable', 'frozen'],
	Costco: ['electronics', 'appliance', 'meat', 'dairy',  'fruit', 'vegetable', 'frozen', 'pet', 'can', 'paper', 'bread', 'cleaning'],
}

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
			const ordering = departmentTable[this.props.store]
			grocery_lists.sort(function( a, b ) {
				return ordering.indexOf(a.department) - ordering.indexOf(b.department)
			})
			
			itemRows = grocery_lists.map(product => {
				const { id, store, checkbox, department, item, amount } = product
				const link = {
					pathname: `/grocery_lists/${id}/edit`,
          grocery_listsParams: [id, store, checkbox, department, item, amount]
				}
        return (
				(product.store === this.props.store) &&
				
					<TableRow className="itemTable" key={id}>
						<TableCell padding="checkbox">
							<Checkbox checked={checkbox} />
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
			fab: {
				color: 'rgb(60, 200, 225)',
				background: 'rgb(60, 200, 225)',
				marginLeft: 40,
			}
		})
		
    return(
				<div>
					<h1 style={{textAlign: 'center'}}>What do I need to buy?
						{/* <Link to='/grocery_lists/new' replace >
							<Fab color='primary' aria-label="Add" className="fab">
								<AddIcon />
								<Icon>add_circle</Icon>
							</Fab>
						</Link> */}
					</h1>
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