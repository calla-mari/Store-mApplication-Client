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
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
// import InfoIcon from '@material-ui/icons/Info'
// import tileData from './tileData'


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
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/MapMB' replace >
              <CardMedia
                className={classes.media}
                image='https://i.imgur.com/4MmHhtO.jpg'
                title="MB"
              />
            </Link>
          </CardActionArea>
          <CardActions style={{justifyContent: 'center'}}>
            <Link to='/grocery_lists/' replace >
              <Icon>list</Icon>
            </Link>
          </CardActions>
        </Card>
      
        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/MapWF' replace >
              <CardMedia
                className={classes.media}
                image='https://i.imgur.com/Oibd8or.jpg'
                title="WF"
              />
            </Link>
          </CardActionArea>
          <CardActions style={{justifyContent: 'center'}}>
            <Link to='/grocery_lists/' replace >
              <Icon>list</Icon>
            </Link>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/MapStar' replace >
              <CardMedia
                className={classes.media}
                image='https://s3.amazonaws.com/s3.wodsfm.radio.com/styles/delta__775x515/s3/Star.jpg?itok=YeZtXDbB'
                title="Star"
              />
            </Link>
          </CardActionArea>
          <CardActions style={{justifyContent: 'center'}}>
            <Link to='/grocery_lists/' replace >
              <Icon>list</Icon>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/MapCostco' replace >
              <CardMedia
                className={classes.media}
                image='http://miami-water.com/blog/wp-content/uploads/2012/06/Costco-Logo.jpg'
                title="Costco"
              />
            </Link>
          </CardActionArea>
          <CardActions style={{justifyContent: 'center'}}>
            <Link to='/grocery_lists/' replace >
              <Icon>list</Icon>
            </Link>
          </CardActions>
        </Card>
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

Store.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Store)
