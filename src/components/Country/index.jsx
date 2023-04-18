import React from 'react'

const Country = ({countryName}) => {
  return (
    <div className='flex items-center flex-col space-y-8'>
        <img src={`https://www.sciencekids.co.nz/images/pictures/flags680/${countryName}.jpg`} alt={countryName} className='w-66 h-48'/>
        <h3>{countryName}</h3>
    </div>
  )
}

export default Country