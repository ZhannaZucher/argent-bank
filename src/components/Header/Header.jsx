import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/argentBankLogo.png"
import { useSelector } from "react-redux"
import { selectUserData, selectUserStatus } from "../../app/selectors"

export default function Header() {
  const isLogged = useSelector(selectUserStatus)
  const user = useSelector(selectUserData)
  console.log(user.firstName)
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
      {isLogged === "resolved" ? (
        <div>
          <a href="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </a>
          <a href="/" className="main-nav-item">
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
