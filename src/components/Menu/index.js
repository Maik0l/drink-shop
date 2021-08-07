import { Link } from "react-router-dom";
import { Container } from "./styles";

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <span>
            <Link to="/">Products</Link>
          </span>
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
    </Container>
  );
};

export default Menu;
