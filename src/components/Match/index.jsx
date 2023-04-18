import React from 'react'
import Country from '../Country'

const Match = ({match, status}) => {
  return (
    <div className='flex items-center justify-center bg-slate-600  p-5 space-x-5 rounded-xl mx-8 my-8'>
      <Country countryName={match.homeTeam.name}/>
      <section className='text-2xl'>
        <h3>{`${match.homeTeam.score} - ${match.awayTeam.score}`}</h3>
        <span>{status}</span>
      </section>
      <Country countryName={match.awayTeam.name}/>
    </div>
  )
}

export default Match