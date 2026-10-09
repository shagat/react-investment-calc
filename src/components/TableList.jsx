export default function InvestmentItem({ headerList, itemList }) {
  return (
    <table id="result">
      <thead>
        <tr>
          {headerList.map((row) => (
            <th>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {itemList.map((row) => (
          <tr>
            {row.map((data) => (
              <td>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
