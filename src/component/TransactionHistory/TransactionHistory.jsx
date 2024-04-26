import css from './TransactionHistory.module.css'
const TransactionHistory = (items) => {
    return(
        <table className={css.table}>
  <thead>
    <tr>
      <th>{items.type}</th>
      <th>{items.amount}</th>
      <th>{items.currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
    <tr>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
  </tbody>
</table>
    )
}


export default TransactionHistory