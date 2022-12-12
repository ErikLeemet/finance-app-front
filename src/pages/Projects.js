import Content from "../Content";

async function populate() {

    const requestURL = '';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const project = await response.json();

    populateProjects(project);
  }

  populate();

  function populateProjects(obj) {
    const content = document.getElementById('mainContent');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');

    td1.textContent = obj.kood;
    td2.textContent = obj.nimetus;
    td3.textContent = obj.eelarve;
    td4.textContent = obj.saldo;
    td5.textContent = obj.algusKpv;
    td6.textContent = obj.lõppKpv;

    content.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
}


export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div>
                <Content />
            </div>
        </div>
    )
}
