import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";

const RemoveButton = ({ item_id }) => {
  const { removeFromWeddingCart } = useContext(WeddingCartContext);
  const { removeFromPromCart } = useContext(PromCartContext);
  const { removeFromCartCeleb } = useContext(CelebCartContext);
  console.log(item_id);
  const handleSend = () => {
    removeFromPromCart(item_id);
  };

  return <button onClick={handleSend}>Remove from cart</button>;
};

export default RemoveButton;
