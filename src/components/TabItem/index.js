// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails} = props
  const {displayText} = eachTabDetails
  return <li className="tabs">{displayText}</li>
}
export default TabItem
