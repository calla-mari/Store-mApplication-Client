import React from 'react'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="shoppingImg">
          <div className="heading">
            <h1>Let&#39;s spend some $$</h1>
            <h3>Tackle that shopping list!!</h3>
            <img 
              src="https://i.imgur.com/5ABjaWv.png" 
              alt="shop" 
              height="600" 
            ></img>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home