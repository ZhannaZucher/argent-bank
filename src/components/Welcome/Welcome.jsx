import { useDispatch } from "react-redux"
import "./Welcome.css"
import { signOut } from "../../features/auth/authSlice"

export default function Welcome() {
  const dispatch = useDispatch()
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button
        className="edit-button"
        onClick={() => {
          dispatch(signOut())
        }}
      >
        Edit Name
      </button>
    </div>
  )
}
