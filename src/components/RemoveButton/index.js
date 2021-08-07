import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";

const RemoveButton = ({ item_id, option }) => {
  const { removeFromWeddingCart } = useContext(WeddingCartContext);
  const { removeFromPromCart } = useContext(PromCartContext);
  const { removeFromCartCeleb } = useContext(CelebCartContext);

  const handleSend = () => {
    if (option === "wedding") {
      removeFromWeddingCart(item_id);
    } else if (option === "prom") {
      removeFromPromCart(item_id);
    } else if (option === "celebration") {
      removeFromCartCeleb(item_id);
    }
  };

  return <button onClick={handleSend}>Remove from cart</button>;
};

export default RemoveButton;
