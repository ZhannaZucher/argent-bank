import AccountBlock from "../../components/AccountBlock/AccountBlock"
import Welcome from "../../components/Welcome/Welcome"
import { AccountDataMock } from "../../data/AccountDataMock"
import "./User.css"

export default function User() {
  return (
    <main className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      {AccountDataMock.map((account, index) => {
        return <AccountBlock key={index} {...account} />
      })}
    </main>
  )
}
