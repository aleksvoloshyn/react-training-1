import React, { Component } from 'react'
import shortid from 'shortid'

class MyForm extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     login: '',
  //     experience: 'middle',
  //     license: false,
  //   }
  // }
  state = {
    login: '',
    experience: 'middle',
    license: false,
  }

  loginInputId = shortid.generate()

  handleChange = (e) => {
    const { name } = e.currentTarget
    this.setState({
      //   login: e.target.value
      //   [e.currentTarget.name]: e.currentTarget.value,
      [name]: e.currentTarget.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`signed up as: ${this.state.login}`)
    // this.props.onSubmit(this.state.login)
  }

  handleLicenseChange = (e) => {
    this.setState({ license: e.currentTarget.checked })
  }

  render() {
    const { login } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        {/* inputs */}
        <label htmlFor={this.loginInputId}>
          Name
          <input
            type="text"
            placeholder="input login"
            value={login}
            onChange={this.handleChange}
            name="login"
            id={this.loginInputId}
            //name такой как в стейте
          />
        </label>
        <button type="submit"> Sign up as {login}</button>
        <br />
        {/* RADIOBOXES */}
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>{' '}
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        {/* checkbox */}
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          />
          Согласен?
        </label>
        <button type="submit" disabled={!this.state.license}>
          ОТПРАВИТЬ
        </button>
      </form>
    )
  }
}

export default MyForm
