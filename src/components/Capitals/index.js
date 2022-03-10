import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return activeCountry.country
  }

  render() {
    const {activeId} = this.state
    const {country} = this.getCountry(activeId)
    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <div>
            <select value={activeId} onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
