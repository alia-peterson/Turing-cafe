import React, { Component } from 'react'
import Form from '../Form/Form'
import Reservations from '../Reservations/Reservations'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = (newResy) => {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newResy)
    }

    this.updateData(postFormat)
      .then(response => this.setState({ reservations: [...this.state.reservations, response] }))
  }

  cancelReservation = (event) => {
    const postFormat = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }

    this.updateData(postFormat, `/${event.target.id}`)
      .then(response => this.setState({ reservations: response }))
  }

  updateData = (postFormat, input = '') => {
    return fetch(`http://localhost:3001/api/v1/reservations${input}`, postFormat)
      .then(response => response.json())
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        this.setState({ reservations: reservations })
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations
            reservations={this.state.reservations}
            addReservation={this.addReservation}
            cancelReservation={this.cancelReservation}
            />
        </div>
      </div>
    )
  }
}

export default App
