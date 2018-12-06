import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

class AddModal extends React.Component {
  constructor () {
    super()

    this.state = {
      grocery_list: {
        checkbox: '',
        department: '',
        item: '',
        amount: ''
      },
      new: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const addItem = { ...this.state.grocery_list, [event.target.name]: event.target.value }
    this.setState({grocery_list: addItem})
    console.log(this.state.grocery_list)
  }

  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  addItem = event => {
    event.preventDefault()

    const { grocery_list } = this.state
    const { flash, history, user } = this.props

    addItem(grocery_list, user)
      .then(handleErrors)
      .then(() => flash(messages.createSuccess, 'flash-success'))
      .then(() => {
        this.setState({ new: true })
      })
      .catch(() => flash(messages.createFail, 'flash-error'))
  }
	
	state = {
	  open: false,
	}

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    const { checkbox, department, item, amount } = this.state.grocery_list

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <form className='userForm' onSubmit={this.addItem}>
              <h3>Add An Item</h3>
              <label htmlFor="department">Department</label>
              <input 
                required
                id="department" 
                name="department" 
                type="text" 
                value={department} 
                onChange={this.handleChange} 
              />
              <label htmlFor="item">Item</label>
              <input 
                required
                id="item" 
                name="item" 
                type="text" 
                value={item} 
                onChange={this.handleChange} 
              />
							
              <label htmlFor="amount">Quantity</label>
              <input 
                id="amount" 
                name="amount" 
                type="number"
                value={amount} 
                onChange={this.handleChange} 
              />
              <button type="submit">Add Item</button>
            </form>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    )
  }
}

AddModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(AddModal)

export default SimpleModalWrapped