import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState()
  const [inputValue, setInputValue] = useState('spa')

  const languageCodes = {
    "ara": "Arab",
    "ces": "Czech",
    "deu": "German",
    "est": "Estonian",
    "eng": "English",
    "fin": "Finnish",
    "fra": "French",
    "hrv": "Croatian",
    "hun": "Hungarian",
    "ita": "Italian",
    "jpn": "Japanese",
    "kor": "Korean",
    "nld": "Dutch",
    "pol": "Polish",
    "por": "Portuguese",
    "rus": "Rusian",
    "slk": "Slovak",
    "spa": "Spanish",
    "swe": "Swedish",
    "tur": "Turkish",
    "urd": "Urdu",
    "zho": "Chinese"
  };



  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${inputValue}`
    axios.get(url)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  }, [inputValue])

  const handleSubmit = e => {
    e.preventDefault();
    const value = inputValue;
    setInputValue(value);
  };



  return (
    <div className="App">
      <div className='card_countries' >
        <h1 className='card_title'>Countries by Language | {languageCodes[inputValue]} </h1>
        <h2>Number of Countries: {countries?.length} of 195 </h2>
        <form className='card__form' onSubmit={handleSubmit}>
          <input className='card__input'
            id="countrylanguage"
            type="text"
            list="languageCodes"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <datalist id="languageCodes">
            {Object.keys(languageCodes).map(code => (
              <option key={code} value={code}>
                {languageCodes[code]}
              </option>
            ))}
          </datalist>
          <button onClick={handleSubmit}>Search</button>
        </form>

        <div className="countries">
          {countries?.map((country) => (
            <Country
              country={country}
              key={country.area}
            />
          ))}
        </div>
        <div className='footer'>
          <h1><a href="#"><i class='bx bxs-chevron-up-circle gotohome'></i></a></h1>
        </div>
      </div ></div>
  )

}

export default App






