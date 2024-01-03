// Write your code here
import {Component} from 'react'
import './index.css'

const imagesList = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

let randomNum = 0

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0}

  onIncrementHeadsCounts = () => {
    this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
  }

  onIncrementTailsCount = () => {
    this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
  }

  onTossBtn = () => {
    randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
      this.onIncrementHeadsCounts()
    } else {
      this.onIncrementTailsCount()
    }
  }

  render() {
    const {headsCount, tailsCount} = this.state
    const imgUrl = imagesList[randomNum]
    return (
      <div className="app-container">
        <div className="sub-app-container">
          <h1 className="toss-app-title">Coin Toss Game</h1>
          <p className="toss-app-desc">Heads (or) Tails</p>
          <img className="toss-img" alt="toss result" src={imgUrl} />
          <br />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossBtn}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {headsCount + tailsCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
