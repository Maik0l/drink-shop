import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/prom">Prom</Link>
      </li>
      <li>
        <Link to="/celebration">Celebration</Link>
      </li>
      <li>
        <Link to="/wedding">Wedding</Link>
      </li>
    </ul>
  );
};

export default Menu;
