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
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

import './Home.scss'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

class Home extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.cardDiv}>
          <Card className={classes.card}>
            <CardActionArea>
              <Link to='/grocery_lists' replace >
                <CardMedia
                  className={classes.media}
                  image='https://i.imgur.com/4MmHhtO.jpg'
                  title="MB"
                />
              </Link>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Link to='/grocery_lists/new' replace >
                <Icon>edit</Icon>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <Link to='/grocery_lists' replace >
                <CardMedia
                  className={classes.media}
                  image='https://i.imgur.com/Oibd8or.jpg'
                  title="MB"
                />
              </Link>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
              <Link to='/grocery_lists/new' replace >
                <Icon>edit</Icon>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>

    // return(
    //   <React.Fragment>
    //     <Link to='/grocery_lists'>
    //       <h1>Market Basket</h1>
    //     </Link>
    //   </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
