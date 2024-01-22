// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  isClicked = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="a">
          <p className="initial">S</p>
          <p className="name">Sarah Williams</p>
        </div>
        <div className="b">
          <p className="urBal">Your Balance</p>
          <div>
            <p className="bal">{balance}</p>
            <p className="rup">In Rupees</p>
          </div>
        </div>
        <p className="wDraw">Withdraw</p>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>
        <ul className="lists">
          {denominationsList.map(eachList => (
            <DenominationItem
              key={eachList.id}
              denominationDetails={eachList}
              isClicked={this.isClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
