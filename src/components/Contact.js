import { Component } from 'react'
import { Consumer } from '../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

class Contact extends Component {

  state = {
    showContactInfo: false
  }

  onDeleteClick = async (dispatch, id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
  }

  render() {
    const { contact } = this.props,
      { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h3>{contact.name} {showContactInfo ?
                <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer', color: 'red' }}></i>
                : <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>}
                <i className="fas fa-times" style={{ color: 'red', float: 'right', cursor: 'pointer' }} onClick={this.onDeleteClick.bind(this, dispatch, contact.id)}></i>
                < Link to={`/contact/edit/${contact.id}`} >
                  <i
                    className="fas fa-pencil-alt"
                    style={{ cursor: 'pointer', color: 'black', float: 'right', marginRight: '1rem' }}
                  ></i>
                </Link>
              </h3>

              {showContactInfo ?
                (<ul className="list-group"><li className="list-group-item">Email : {contact.email} </li><li className="list-group-item">Phone : {contact.phone} </li></ul>)
                : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}


export default Contact
