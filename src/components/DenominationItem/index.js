// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, isClicked} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    isClicked(value)
  }

  return (
    <li>
      <button type="button" onClick={onClickButton} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
