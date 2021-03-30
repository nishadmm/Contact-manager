import React, { Component } from 'react'

export default class Test extends Component {

  state = {
    name: '',
    comapny: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        company: data.company.name
      }))
  }

  // UNSAFE_componentWillMount() {
  //   console.log('component will mount');
  // }

  // componentDidUpdate() {
  //   console.log('Component did update');
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log('component will update');
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps');
  // }

  // static getDerivedStateFromProps(props, state) {
  //   return null
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const { name, company } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
      </div>
    )
  }
}
