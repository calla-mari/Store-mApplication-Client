import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Link to='/list'>
          <h1>Market Basket</h1>
        </Link>
      </React.Fragment>
    )
  }
}

export default Home