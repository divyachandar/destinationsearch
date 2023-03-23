// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationInfo} = this.props
    const {name, imgUrl} = destinationInfo

    return (
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
