import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'

class ClassCmp extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <>
        <h2>Classes div</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </>
    )
  }
}

export { ClassCmp }
