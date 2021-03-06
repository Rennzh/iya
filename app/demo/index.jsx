import React from 'react' // 必须使用 React
import request from 'superagent'
import { connect } from 'react-redux'
import { cloneDeep } from 'lodash'

const { Component } = React

class X extends Component {
  constructor() {
    super()
  }

  static defaultProps = {
    name: 'foo'
  }

  async pong() {
    return request.get('http://baidu.com')
  }

  async ping() {
    await this.pong()
  }

  render() {
    return (
      <div style={{color: 'purple' }}>
        hello your name is : <br />
        {this.props.name}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return cloneDeep(state)
}

export default connect(mapStateToProps)(X)