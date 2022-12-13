import Content from "../Content";
import data from "../data.json"

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
