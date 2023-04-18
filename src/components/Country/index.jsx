import React from 'react'

const Country = ({countryName}) => {
  return (
    <div>
        <img src={`https://www.sciencekids.co.nz/images/pictures/flags680/${countryName}.jpg`} alt={countryName}/>
        <h3>{countryName}</h3>
    </div>
  )
}

export default Country