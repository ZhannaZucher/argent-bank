import { useState } from "react"
import "./SignInForm.css"
import { authLogin } from "../../features/auth/authSlice"
import { useDispatch } from "react-redux"

export default function SignInForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const payload = { email: username, password: password }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, rememberMe)
    //faut-il clear les states username, password, rememberMe???
    dispatch(authLogin(payload))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          onChange={(e) => {
            setRememberMe(e.target.checked)
          }}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  )
}
