import React from 'react'
import Card from '../Card/Card'

export default function Reservations({ reservations, addReservation, cancelReservation }) {
  const allReservations = reservations.map(resy => {
    return (
      <Card
        key={resy.id}
        id={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
        cancelReservation={cancelReservation}
        />
    )
  })

  return (
    <>
      {allReservations}
    </>
  )
}
