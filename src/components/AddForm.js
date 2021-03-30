import React, { Component } from 'react'
import { Consumer } from '../context'
import TextInputGroup from './TextInputGroup'
import axios from 'axios'
// const { v4: uuidv4 } = require('uuid')

export default class AddFrom extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onSubmit = async (dispatch, e) => {

    e.preventDefault()
    const { name, email, phone } = this.state

    if (name === '') {
      this.setState({ errors: { name: "Name Is Requierd" } })
      return
    }
    if (email === '') {
      this.setState({ errors: { email: "Email Is Requierd" } })
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: "Phone Is Requierd" } })
      return
    }

    const newContact = {
      // id: uuidv4(),
      name,
      email,
      phone
    }

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

    dispatch({ type: "ADD_CONTACT", payload: res.data })

    this.setState({ name: '', email: '', phone: '', errors: {} })

    this.props.history.push('/')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    let { name, email, phone } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (

            <div className="card mb-3">
              <div className="card-header ">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label='Name'
                    name='name'
                    placeholder='Enter name...'
                    value={name}
                    onchange={this.onChange}
                    errors={this.state.errors.name}
                  />
                  <TextInputGroup
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter Email...'
                    value={email}
                    onchange={this.onChange}
                    errors={this.state.errors.email}
                  />
                  <TextInputGroup
                    label='Phone Number'
                    name='phone'
                    placeholder='Enter Phone...'
                    value={phone}
                    onchange={this.onChange}
                    errors={this.state.errors.phone}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>

    )
  }
}
