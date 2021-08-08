import { useContext } from "react";
import { PromCartContext } from "../../providers/CartProm";
import Card from "../../components/Card";
import { Container } from "./styles";

const Prom = () => {
  const { promCart } = useContext(PromCartContext);

  return (
    <Container>
      {promCart.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image_url={item.image_url}
          first_brewed={item.first_brewed}
          description={item.description}
          unit={item.volume.unit}
          value={item.volume.value}
          item={item}
          item_id={item.id}
          type="remove"
          page="prom"
        />
      ))}
    </Container>
  );
};

export default Prom;
