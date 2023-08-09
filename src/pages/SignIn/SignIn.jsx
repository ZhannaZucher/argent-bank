import { useSelector } from "react-redux"
import SignInForm from "../../components/SignInForm/SignInForm"
import "./SignIn.css"
import { selectAuthStatus } from "../../app/selectors"
import Loader from "../../components/Loader/Loader"

export default function SignIn() {
  const queryStatus = useSelector(selectAuthStatus)
  console.log(queryStatus)
  return (
    <main className="main bg-dark">
      {queryStatus === "fetching" ? (
        <Loader />
      ) : (
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      )}
    </main>
  )
}
