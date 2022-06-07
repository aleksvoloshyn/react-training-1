import React, { Component } from 'react'
// import { ReactDOM } from 'react-dom'

class ClassCmp extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       value: '',
  //       num: 0,
  //     }
  //     }

  // Default props
  static defaultProps = {
    initialValue: 100,
  }

  state = {
    value: '',
    num: this.props.initialValue,
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
        <p>{this.state.num % 2 === 0 ? this.state.num : 'НЕПАРНОЕ'}</p>
        <button
          onClick={() => {
            this.setState((prev) => {
              return {
                num: prev.num + 1,
              }
            })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState((prev) => {
              return {
                num: prev.num - 1,
              }
            })
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ num: this.props.initialValue })
          }}
        >
          RESET
        </button>
      </>
    )
  }
}

export { ClassCmp }
