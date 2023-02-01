import React from 'react'

const Country = ({ country }) => {

    console.log(country);

    return (
        <div >
            <img src={country.flags.svg} alt="" />
            <h2>{country.name.common}</h2>
            <p><b>Capital :</b> {country.capital?.[0]}</p>
            <p><b>Population :</b> {country.population} Hab.</p>

        </div>
    )
}

export default Country

