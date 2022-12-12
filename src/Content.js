import './Content.css'


var data = [
    {"id": 1, "Project": "mini man", "Eelarve": "10", "Saldo": "100", "Alguskpv": "100", "Lõppkpv": "100"},
    { "id": 2, "Project": "tall man", "Eelarve": "10", "Saldo": "100", "Alguskpv": "100", "Lõppkpv": "100"},
   ];

const content = document.getElementsByClassName('table');
data.forEach(element => content.insertAdjacentHTML('beforebegin', `<tr><td>${element.id}</td><td>${element.Project}</td><td>${element.Eelarve}</td><td>${element.Saldo}</td><td>${element.Alguskpv}</td><td>${element.Lõppkpv}</td></tr>`));

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
   <tbody className="table">
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
