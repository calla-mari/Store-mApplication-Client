import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import './Home.scss'

class Home extends React.Component {
  render() {

    return(
      <React.Fragment>
        <Link to='/items'>
          <h1>Market Basket</h1>
        </Link>
        <div className="layout">
          <Row type="flex" justify="space-around">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
          </Row>
          <Row gutter={24}>
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
          </Row>
          <Row type="flex" justify="space-around">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default Home