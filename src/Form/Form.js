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

  render() {
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
          type='text'
          name='guests'
          placeholder='Number of guests'
          value={this.state.guests}
          onChange={this.handleChange}
          />
        <button className='form-button' onClick={this.props.addReservation}>Make Reservation</button>
      </section>
    )
  }
}
