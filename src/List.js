import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from './config/api.js'
import { Button } from 'antd'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grocery_lists: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${API_BASE_URL}/grocery_lists`)
    // this.setState({list: response.data.list})
    console.log(response)
  }

  render() {
    let itemRows
    const { grocery_lists } = this.state
    
    if (grocery_lists.length === 0) {
      itemRows = <tr><td>You have no items in you list</td></tr>
    } else {
      itemRows = grocery_lists.map(item => {
        const { id, items, amount} = grocery_lists
        return (
          <tr key={id}>
            <td>
              <Link to={`/list/${id}`}>{items}{amount}</Link>
            </td>
          </tr>
        )
      })
    }

    return(
      <React.Fragment>
        <h1>Let Spend Some $$</h1>
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

export default List