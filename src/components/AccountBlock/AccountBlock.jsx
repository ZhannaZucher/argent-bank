import "./AccountBlock.css"
import PropTypes from "prop-types"

export default function AccountBlock({ title, deal, amount, status }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank {title} (x{deal})
        </h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{status} Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

AccountBlock.propTypes = {
  title: PropTypes.string.isRequired,
  deal: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}
