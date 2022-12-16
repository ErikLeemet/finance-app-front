import Content from "../Content";
import data from "../TestFiles/MOCK_DATA.json"

const getHeadings = () => {
      return Object.keys(data[0]);
    }

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div>
                <Content theadData={getHeadings()} tbodyData={data}/>
            </div>
        </div>
    )
}
