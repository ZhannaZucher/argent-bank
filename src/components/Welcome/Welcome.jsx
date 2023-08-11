import { useDispatch } from "react-redux"
import "./Welcome.css"
import { logOut } from "../../features/user/userSlice"

export default function Welcome() {
  const dispatch = useDispatch()
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button" onClick={() => dispatch(logOut)}>
        Edit Name
      </button>
    </div>
  )
}
