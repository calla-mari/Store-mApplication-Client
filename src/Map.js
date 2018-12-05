import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  container: {
    margin: 20,
    padding: 20,
    background: 'rgb(249, 249, 249)',
  },
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(196, 137, 43)',
  },
  paper2: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(237, 208, 82)',
  },
  paper3: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(244, 180, 19)',
  },
  paper4: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(216, 0, 0)',
  },
  paper5: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(102, 114, 140)',
  },
  paper6: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(122, 10, 132)',
  },
  paper7: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(44, 116, 249)',
  },
  paper8: {
    padding: 5,
    textAlign: 'center',
    background: 'rgb(43, 196, 73)',
  },
})

function FullWidthGrid(props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper3}>
                  <img src="https://i.imgur.com/UOVNtM6.png" alt="cereal" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper4}>
                  <img src="https://i.imgur.com/GQaAn34.png" alt="can" height="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper5}>
                  <img src="https://i.imgur.com/jw1dS52.png" alt="cow" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper6}>
                  <img src="https://i.imgur.com/wLLLo1G.png" alt="grapes" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper2}>
                  <img src="https://i.imgur.com/J2K0DHJ.png" alt="cheese" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper1}>
                  <img src="https://i.imgur.com/fmuFJsa.png" alt="bread" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper7}>
                  <img src="https://i.imgur.com/nw0jMba.png" alt="frozen" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CardActionArea>
              <Link to='/grocery_lists/new' replace >
                <Paper className={classes.paper8}>
                  <img src="https://i.imgur.com/NkBvFde.png" alt="lettuce" height="50" width="50"></img>
                </Paper>
              </Link>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullWidthGrid)