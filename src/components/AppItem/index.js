// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails
  return (
    <li className="appLi">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
