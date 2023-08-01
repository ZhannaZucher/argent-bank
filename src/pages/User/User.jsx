import Welcome from "../../components/Welcome/Welcome"
import "./User.css"

export default function User() {
  return (
    <main className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      <section className="account"></section>
    </main>
  )
}
