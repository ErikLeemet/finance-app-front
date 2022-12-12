import './Content.css'

export default function Content() {
    return(
<div class="table-wrapper">
  <table>
   <thead>
    <tr>
      <th></th>
      <th>Projekti kood</th>
      <th>Projekti nimetus</th>
      <th>Eelarve</th>
      <th>Saldo</th>
      <th>Algus kpv</th>
      <th>Lõpp kpv</th>
    </tr>
  </thead>
   <tbody id="mainContent">
    <tr>
      <td>Anna</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
  </table>
</div>
    );
}
