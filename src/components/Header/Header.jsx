import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux"
import { selectUserData, selectUserStatus } from "../../app/selectors"
import { logOut } from "../../features/user/userSlice"

export default function Header() {
  const dispatch = useDispatch()
  //checking for user connected :
  const isLogged = useSelector(selectUserStatus) === "resolved"
  const user = useSelector(selectUserData)

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          src={logo}
          alt="logo Argent Bank"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLogged ? (
        <div>
          <a href="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </a>
          <a
            href="/"
            className="main-nav-item"
            onClick={(e) => {
              e.preventDefault()
              dispatch(logOut)
            }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : (
        <div>
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      )}
    </nav>
  )
}
