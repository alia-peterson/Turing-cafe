import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

export default function Reservations({ reservations, addReservation, cancelReservation }) {
  const allReservations = reservations.map(resy => {
    return (
      <Card
        key={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
        cancelReservation={cancelReservation}
        />
    )
  })
  return (
    <article className='resy-container'>
      {allReservations}
    </article>
  )
}
