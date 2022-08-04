// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails
  return (
    <li className="appLi">
      <imp src={imageUrl} alt={appName} className="app-img" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
