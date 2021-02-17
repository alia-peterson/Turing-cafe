import React from 'react'
import './Card.css'

export default function Card({ id, name, date, time, number, cancelReservation }) {
  return (
    <article className='resy'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button
        className='resy-button'
        id={id}
        onClick={cancelReservation}
        >
        Cancel
      </button>
    </article>
  )
}
