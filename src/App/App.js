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

  addReservation() {
    console.log('added!');
  }

  cancelReservation() {
    // const canceledResy = this.fetchData()
    console.log('canceled!');
  }

  fetchData(input = '') {
    return fetch(`http://localhost:3001/api/v1/reservations${input}`)
            .then(response => response.json())
  }

  componentDidMount() {
    const apiData = this.fetchData()
    apiData.then(reservations => {
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
