import { useEffect, useState } from "react"
import "./SignInForm.css"
import { authLogin, togglePersist } from "../../features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"
import {
  selectAuthError,
  selectCurrentToken,
  selectRememberMe,
} from "../../app/selectors"
import { useNavigate } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"

export default function SignInForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const payload = { email: username, password: password }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector(selectCurrentToken)
  const error = useSelector(selectAuthError)
  const rememberMe = useSelector(selectRememberMe)

  useEffect(() => {
    token && navigate("/profile")
  }, [token, navigate])

  useEffect(() => {
    if (rememberMe && token) {
      secureLocalStorage.setItem("token", token)
    } else if (token) {
      sessionStorage.setItem("token", JSON.stringify(token))
    }
  }, [token, rememberMe])

  const handleSubmit = (e) => {
    e.preventDefault()
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
            dispatch(togglePersist(e.target.checked))
          }}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && (
        <p className="text-danger">
          {error.errorCode === 400
            ? "Invalid email or password"
            : "Server error, retry later"}
        </p>
      )}
      <button className="sign-in-button">Sign In</button>
    </form>
  )
}
