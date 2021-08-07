import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";

const AddButton = ({ type, option, item }) => {
  const { addToWeddingCart } = useContext(WeddingCartContext);
  const { addToPromCart } = useContext(PromCartContext);
  const { addToCartCeleb } = useContext(CelebCartContext);

  const handleSend = () => {
    if (option === "wedding") {
      addToWeddingCart(item);
    } else if (option === "prom") {
      addToPromCart(item);
    } else if (option === "celebration") {
      addToCartCeleb(item);
    }
  };

  return <button onClick={handleSend}>Add to cart</button>;
};

export default AddButton;
