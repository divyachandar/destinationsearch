import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputSearch: ''}

  onChangeInput = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="header">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="input-search"
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-logo"
            />
          </div>
        </div>
        <ul className="destination-item-container">
          {searchResult.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationInfo={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
