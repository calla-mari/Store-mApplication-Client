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
	
  // async componentDidMount () {
  //   try {
  //     const { user } = this.props
  //     const response = await showAllItem(user)
  //     const json = await response.json()
  //     this.setState({grocery_list: json.grocery_list})
  //   } catch(e) {
  //     const { flash } = this.props
  //     flash(messages.showFail, 'flash-error')
  //   }
  // }

  async componentDidMount() {
		event.preventDefault()

    const { grocery_list } = this.state
    const { flash, history, user } = this.props

    showAllItem(user)
      .then(handleErrors)
			.then(() => flash(messages.showSuccess, 'flash-success'))
			.then(console.log)
      .catch(() => flash(messages.createFail, 'flash-error'))
  
    // const response = await axios.get(`${API_BASE_URL}/grocery_lists`)
    // this.setState({list: response.data.list})
  }
	
  // async deleteItem(event) {
  //   const { id } = this.props.match.params
  //   const response = await axios.delete(`${API_BASE_URL}/grocery_lists/${id}`)
  //   this.setState({deleted: true})
  // }

  render() {
    let itemRows
		const { grocery_lists } = this.state
		
		if ( grocery_lists ) {
			itemRows = grocery_lists.map(grocery_list => {
				const { id, item, amount} = grocery_list
				return (
					<tr key={id}>
						<td>
							<Link to={`/list/${id}`}>{item}{amount}</Link>
						</td>
					</tr>
				)
			})
		} else {
			itemRows = <tr><td>You have no items in you list</td></tr>
		}
    
    // if (grocery_lists.length === 0) {
    //   itemRows = <tr><td>You have no items in you list</td></tr>
    // } else {
    //   itemRows = grocery_lists.map(item => {
    //     const { id, items, amount} = grocery_lists
    //     return (
    //       <tr key={id}>
    //         <td>
    //           <Link to={`/list/${id}`}>{items}{amount}</Link>
    //         </td>
    //       </tr>
    //     )
    //   })
    // }

    return(
      <React.Fragment>
        <h1>What do I need to buy?</h1>
        <Link to='/item/new'>
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