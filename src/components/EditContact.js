import React, { Component } from 'react'
import { Consumer } from '../context'
import TextInputGroup from './TextInputGroup'
import axios from 'axios'

export default class EditContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount() {

    const { id } = this.props.match.params

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    const contact = res.data

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.email
    })
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

    const updatedContact = {
      name,
      email,
      phone
    }
    const { id } = this.props.match.params

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact)

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data })

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
              <div className="card-header ">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)} >
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
                  <input type="submit" value="Update Contact" className="btn btn-danger btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>

    )
  }
}
