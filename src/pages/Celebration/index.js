import { useContext } from "react";
import { CelebCartContext } from "../../providers/CartCeleb";
import Card from "../../components/Card";
import { Container } from "./styles";

const Celebration = () => {
  const { cartCeleb } = useContext(CelebCartContext);

  return (
    <Container>
      {cartCeleb.map((item) => (
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
          page="celeb"
        />
      ))}
    </Container>
  );
};

export default Celebration;
