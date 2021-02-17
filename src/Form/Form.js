import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addReservation = () => {
    const newResy = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.guests
    }

    this.props.addReservation(newResy)
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: ''
    })
  }

  render() {
    let formCompletion = false
    if (this.state.name && this.state.date && this.state.time && this.state.guests) {
      formCompletion = true
    }

    return (
      <section className='form-container'>
        <input
          className='form-input'
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
          />
        <input
          className='form-input'
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={this.handleChange}
          />
        <input
          className='form-input'
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={this.handleChange}
          />
        <input
          className='form-input'
          type='number'
          name='guests'
          placeholder='Number of guests'
          value={this.state.guests}
          onChange={this.handleChange}
          />
        <button
          className='form-button'
          onClick={this.addReservation}
          disabled={formCompletion ? false : true}
          >
          Make Reservation
        </button>
      </section>
    )
  }
}
