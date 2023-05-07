import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
      <ul>
        {data?.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
            {route.subRoutes?.length > 0 && <Navbar data={route.subRoutes} />}
          </li>
        ))}
      </ul>
  );
};

export default Navbar;
