import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";

const Button = ({ type, option, item, id }) => {
  const text = type === "add" ? "Add to cart" : "Remove from cart";

  const { addToWeddingCart, removeFromWeddingCart } =
    useContext(WeddingCartContext);
  const { addToPromCart, removeFromPromCart } = useContext(PromCartContext);
  const { cartCeleb, removeFromCartCeleb, addToCartCeleb } =
    useContext(CelebCartContext);

  const handleSend = () => {
    if (option === "wedding") {
      addToWeddingCart(item);
    } else if (option === "prom") {
      addToPromCart(item);
    } else if (option === "celebration") {
      addToCartCeleb(item);
    }
  };

  return <button onClick={handleSend}>{text}</button>;
};

export default Button;
