import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Icon from '@material-ui/core/Icon'



import './Store.scss'

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 200,
    borderRadius: 10,
    margin: 20,
  },
  media: {
    height: 140,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}

class Store extends React.Component {
  render(props) {
    const { classes, updateStore, stores } = this.props
    return (
      <div className={classes.root}>
      
        {stores.map((store) => { 
          return (
            <Card className={classes.card} key={store.abbrev}>
              <CardActionArea>
                <Link to='/Map' replace >
                  <CardMedia
                    className={classes.media}
                    image={store.image}
                    title={store.abbrev}
                    onClick={() => updateStore(store.name)}
                  />
                </Link>
              </CardActionArea>
              {/* <CardActions style={{justifyContent: 'center'}}>
                <Link to='/Map' replace >
                  <Icon>list</Icon>
                </Link>
              </CardActions> */}
            </Card> 
          )
        })
        } 
      </div>
    )
  }
}

Store.propTypes = {
  classes: PropTypes.object.isRequired,
  stores: PropTypes.array.isRequired
}

export default withStyles(styles)(Store)
