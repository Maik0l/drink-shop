import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";
import { OptionContext } from "../../providers/Option";
import { Button } from "./styles";

const AddButton = ({ type, item, item_id }) => {
  const text = type === "add" ? "Add to cart" : "Remove from cart";

  const { option, setOption } = useContext(OptionContext);
  const { addToWeddingCart, removeFromWeddingCart } =
    useContext(WeddingCartContext);
  const { addToPromCart, removeFromPromCart } = useContext(PromCartContext);
  const { addToCartCeleb, removeFromCartCeleb } = useContext(CelebCartContext);

  console.log(type);
  console.log(item_id);
  console.log(option);
  const handleSend = () => {
    if (type === "add") {
      if (option === "wedding") {
        addToWeddingCart(item);
      } else if (option === "prom") {
        addToPromCart(item);
      } else if (option === "celebration") {
        addToCartCeleb(item);
      }
    } else {
      console.log("remover");

      removeFromWeddingCart(item_id);
      removeFromPromCart(item_id);
      removeFromCartCeleb(item_id);
    }
  };

  return <Button onClick={handleSend}>{text}</Button>;
};

export default AddButton;
