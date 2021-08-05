import { useContext } from "react";
import { PromCartContext } from "../../providers/CartProm";
import Card from "../../components/Card";

const Prom = () => {
  const { promCart } = useContext(PromCartContext);

  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default Prom;
