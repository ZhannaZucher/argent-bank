import { useSelector } from "react-redux"
import AccountBlock from "../../components/AccountBlock/AccountBlock"
import Welcome from "../../components/Welcome/Welcome"
import { AccountDataMock } from "../../data/AccountDataMock"
import "./User.css"
import { selectUserError, selectUserStatus } from "../../app/selectors"
import Loader from "../../components/Loader/Loader"

export default function User() {
  const queryStatus = useSelector(selectUserStatus)
  const error = useSelector(selectUserError)

  return (
    <>
      {error?.errorCode ? (
        <div className="error-block main bg-dark">
          <p className="text-danger">
            Oups, something went wrong, <br /> please retry later
          </p>
        </div>
      ) : (
        <main className="main bg-dark">
          {queryStatus === "fetching" || queryStatus === "updating" ? (
            <Loader />
          ) : (
            <>
              <Welcome />
              <h2 className="sr-only">Accounts</h2>
              {AccountDataMock.map((account, index) => {
                return <AccountBlock key={index} {...account} />
              })}
            </>
          )}
        </main>
      )}
    </>
  )
}
