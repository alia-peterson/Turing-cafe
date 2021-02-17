import React from 'react'
import './Card.css'

export default function Card({ name, date, time, number }) {
  return (
    <article className='resy'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button className='resy-button'>Cancel</button>
    </article>
  )
}
