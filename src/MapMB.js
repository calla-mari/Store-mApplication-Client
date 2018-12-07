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
import ItemsList from './grocery/components/showAllItem'
import Home from './Home'
import Store from './Store'
import addModal from './grocery/components/addItemModal'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  card: {
    maxWidth: 200,
    borderRadius: 10,
    margin: 20,
  },
  media: {
    height: 140,
  },
  container: {
    margin: 5,
    padding: 20,
    background: 'rgb(249, 249, 249)',
  },
  containerDoor: {
    marginTop: 10,
    padding: 5,
    background: 'rgb(249, 249, 249)',
  },
  root: {
    flexGrow: 1,
  },
  door: {
    background: 'rgb(77, 96, 127)',
    color: 'rgb(249, 249, 249)',
    textAlign: 'center',
  },
  doorL: {
    textAlign: 'right',
  },
  doorR: {
    textAlign: 'Left',
  },
  door3: {
    color: 'rgb(249, 249, 249)',
    background: 'rgb(77, 96, 127)',
  },
  paper1: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(196, 137, 43)',
  },
  paper2: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(237, 208, 82)',
  },
  paper3: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(244, 180, 19)',
  },
  paper4: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(216, 0, 0)',
  },
  paper5: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(102, 114, 140)',
  },
  paper6: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(122, 10, 132)',
  },
  paper7: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(44, 116, 249)',
  },
  paper8: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(43, 196, 73)',
  },
})

function StoreMap(props) {
  const { classes } = props
  const addInfo = (dept, store) => {
    props.updateDept(dept)
    props.updateStore(store)
  }

  return (
    <div>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/Store' replace >
              <CardMedia
                className={classes.media}
                image='https://i.imgur.com/4MmHhtO.jpg'
                title="MB"
              />
            </Link>
          </CardActionArea>
          <CardActions style={{justifyContent: 'center'}}>
            <Link to='/Store' replace >
              <Icon>home</Icon>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('cereal', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper3}>
                    <img 
                      src="https://i.imgur.com/UOVNtM6.png" 
                      alt="cereal" 
                      height="50" 
                      // onClick={this.addToCereal}
                    ></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('can', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper4}>
                    <img src="https://i.imgur.com/GQaAn34.png" alt="can" height="50"></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('meat', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper5}>
                    <img 
                      src="https://i.imgur.com/jw1dS52.png" 
                      alt="cow" 
                      height="50" 
                      
                    ></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('fruit', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper6}>
                    <img 
                      src="https://i.imgur.com/wLLLo1G.png" 
                      alt="grapes" 
                      height="50" 
                    ></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('dairy', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper2}>
                    <img src="https://i.imgur.com/J2K0DHJ.png" alt="cheese" height="50" width="50"></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('bread', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper1}>
                    <img src="https://i.imgur.com/fmuFJsa.png" alt="bread" height="50" width="50"></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('frozen', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper7}>
                    <img src="https://i.imgur.com/nw0jMba.png" alt="frozen" height="50" width="50"></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Link onClick={() => addInfo('vegetable', 'MarketBasket')} to='/grocery_lists/new' replace >
                  <Paper className={classes.paper8}>
                    <img src="https://i.imgur.com/NkBvFde.png" alt="lettuce" height="50" width="50"></img>
                  </Paper>
                </Link>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>
        <div className={classes.containerDoor}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <CardActionArea className={classes.doorL}>
                <Icon className={classes.door3}>
                  expand_less
                </Icon>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea className={classes.doorR}>
                <Icon className={classes.door3}>
                  expand_less
                </Icon>
              </CardActionArea>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Paper className={classes.door}>
                  Left Door
                </Paper>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea>
              </CardActionArea>
            </Grid>
            <Grid item xs={6} sm={3}>
              <CardActionArea>
                <Paper className={classes.door}>
                  Right Door
                </Paper>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>
      </div>
      <br />
      <div>
        <ItemsList user={props.user} flash={props.flash} checkedOnly={true} />
      </div>
    </div>
  )
}

StoreMap.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StoreMap)