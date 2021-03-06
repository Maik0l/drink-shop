import { useContext } from "react";
import Card from "../../components/Card";
import { WeddingCartContext } from "../../providers/CartWedding";
import { Container } from "./styles";

const Wedding = () => {
  const { weddingCart } = useContext(WeddingCartContext);

  return (
    <Container>
      {weddingCart.map((item) => (
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
          page="wedding"
        />
      ))}
    </Container>
  );
};

export default Wedding;
