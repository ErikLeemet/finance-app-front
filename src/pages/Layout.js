import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Procurements">Procurements</Link>
          </li>
          <li>
            <Link to="/Resources">Resources</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
