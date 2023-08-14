import { useSelector } from "react-redux"
import "./Welcome.css"
import { selectUserData } from "../../app/selectors"

export default function Welcome() {
  const user = useSelector(selectUserData)
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstName + " " + user.lastName + "!"}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}
