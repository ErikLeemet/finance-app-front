import './Content.css'

export default function Content({theadData, tbodyData}) {
    return(
<div className="table-wrapper">
  <table>
   <thead>
    <tr>
      <th>Projekti kood</th>
      <th>Projekti nimetus</th>
      <th>Eelarve</th>
      <th>Saldo</th>
      <th>Algus kpv</th>
      <th>Lõpp kpv</th>
    </tr>
  </thead>
   <tbody className="table">
   {tbodyData.map((row, index) => {
    return <tr key={index}>
        {theadData.map((key, index) => {
            return <td unique-key={index} key={row[key]}>{row[key]}</td>
        })}
   </tr>;
   })}
  </tbody>
  </table>
</div>
    );
}
