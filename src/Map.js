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
  bread: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(196, 137, 43)',
  },
  dairy: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(237, 208, 82)',
  },
  cereal: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(244, 180, 19)',
  },
  can: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(216, 0, 0)',
  },
  meat: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(102, 114, 140)',
  },
  fruit: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(122, 10, 132)',
  },
  frozen: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(44, 116, 249)',
  },
  vegetable: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(43, 196, 73)',
  },
  paper: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(0, 0, 0)',
  },
  cleaning: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(62, 205, 221)',
  },
  appliance: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(216, 30, 213)',
  },
  electronics: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(131, 135, 140)',
  },
  pet: {
    padding: 10,
    paddingTop:25,
    paddingBottom: 25,
    textAlign: 'center',
    background: 'rgb(89, 44, 3)',
  },
})

const departmentImages = {
  cereal: 'https://i.imgur.com/UOVNtM6.png',
  can: 'https://i.imgur.com/GQaAn34.png',
  meat: 'https://i.imgur.com/jw1dS52.png',
  fruit: 'https://i.imgur.com/wLLLo1G.png',
  dairy: 'https://i.imgur.com/J2K0DHJ.png',
  bread: 'https://i.imgur.com/fmuFJsa.png',
  frozen: 'https://i.imgur.com/nw0jMba.png',
  vegetable: 'https://i.imgur.com/NkBvFde.png',
  paper: 'https://i.imgur.com/dDKE0gp.png',
  cleaning: 'https://i.imgur.com/BLfCYiB.png',
  appliance: 'https://i.imgur.com/H4S8xwH.png',
  electronics: 'https://i.imgur.com/GAkl8yK.png',
  pet: 'https://i.imgur.com/MX1SP7S.png'
}

const imageMapping = {
  MarketBasket: 'https://i.imgur.com/4MmHhtO.jpg',
  WholeFoods: 'https://i.imgur.com/Oibd8or.jpg',
  // StarMarket: 'https://s3.amazonaws.com/s3.wodsfm.radio.com/styles/delta__775x515/s3/Star.jpg?itok=YeZtXDbB',
  Costco: 'http://miami-water.com/blog/wp-content/uploads/2012/06/Costco-Logo.jpg'
}

const departmentCards = {
  MarketBasket: ['cereal', 'can', 'meat', 'fruit', 'dairy', 'bread', 'frozen', 'vegetable'],
  WholeFoods: ['frozen', 'meat', 'dairy', 'fruit', 'bread', 'can', 'cereal', 'vegetable'],
  // StarMarket: ['dairy', 'bread', 'cereal', 'can', 'meat',  'fruit', 'vegetable', 'frozen'],
  Costco: ['paper', 'vegetable', 'fruit', 'meat', 'pet',  'frozen', 'dairy', 'appliance', 'can', 'cleaning', 'bread', 'electronics']
}

function StoreMap(props) {
  const { classes, store } = props
  const departmentCard = departmentCards[store]
  const image = imageMapping[store]

  return (
    <div>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <Link to='/Store' replace >
              <CardMedia
                className={classes.media}
                image={image}
                title={store}
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
            {departmentCard.map(departmentName => {
              return (
                <Grid item xs={6} sm={3} key={departmentName}>
                  <CardActionArea>
                    <Link onClick={() => props.updateDept(departmentName)} to='/grocery_lists/new' replace >
                      <Paper className={classes[departmentName]}>
                        <img 
                          src={departmentImages[departmentName]} 
                          alt={departmentName} 
                          height="50" 
                        ></img>
                      </Paper>
                    </Link>
                  </CardActionArea>
                </Grid>
              )
            })}
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
        <ItemsList user={props.user} flash={props.flash} checkedOnly={true} store={props.store} />
      </div>
    </div>
  )
}

StoreMap.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.string
}

export default withStyles(styles)(StoreMap)