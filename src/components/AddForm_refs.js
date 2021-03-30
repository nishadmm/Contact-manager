import React, { Component } from 'react'

export default class AddFrom extends Component {

  constructor(props) {
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  onSubmit = (e) => {
    e.preventDefault()

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.nameInput.current.value
    }

    console.log(contact);
  }

  static defaultProps = {
    name: 'Nishad',
    email: 'nishad@gmail.com',
    phone: '222-222-2222'
  }

  render() {
    let { name, email, phone } = this.props
    return (
      <div className="card mb-3">
        <div className="card-header ">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                required
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email..."
                required
                className="form-control form-control-lg"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone no"
                required
                className="form-control form-control-lg"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    )
  }
}
