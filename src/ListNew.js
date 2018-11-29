import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from './config/api.js';

class ListNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        checkbox: '',
        items: '',
        amount: ''
      }
    }
  }
  
  render() {
    return(
      <React.Fragment>
        <h1></h1>
      </React.Fragment>
    )
  }

}

export default ListNew