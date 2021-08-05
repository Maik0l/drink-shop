import { useContext } from "react";
import { CelebCartContext } from "../../providers/CartCeleb";
import Card from "../../components/Card";

const Celebration = () => {
  const { cartCeleb } = useContext(CelebCartContext);

  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default Celebration;
