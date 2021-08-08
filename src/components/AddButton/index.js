import { useContext } from "react";
import { WeddingCartContext } from "../../providers/CartWedding";
import { PromCartContext } from "../../providers/CartProm";
import { CelebCartContext } from "../../providers/CartCeleb";
import { OptionContext } from "../../providers/Option";
import { Button } from "./styles";

const AddButton = ({ type, item, item_id, page }) => {
  const text = type === "add" ? "Add to cart" : "Remove from cart";

  const { option } = useContext(OptionContext);
  const { addToWeddingCart, removeFromWeddingCart } =
    useContext(WeddingCartContext);
  const { addToPromCart, removeFromPromCart } = useContext(PromCartContext);
  const { addToCartCeleb, removeFromCartCeleb } = useContext(CelebCartContext);

  const handleRemoveCeleb = () => {
    if (page === "celeb") {
      removeFromCartCeleb(item_id);
    }
  };

  const handleRemoveProm = () => {
    if (page === "prom") {
      removeFromPromCart(item_id);
    }
  };

  const handleRemoveWedding = () => {
    if (page === "wedding") {
      removeFromWeddingCart(item_id);
    }
  };

  const handleSend = () => {
    if (type === "add") {
      if (option === "wedding") {
        addToWeddingCart(item);
      } else if (option === "prom") {
        addToPromCart(item);
      } else if (option === "celebration") {
        addToCartCeleb(item);
      }
    }
  };

  return (
    <Button
      onClick={
        (page === "home" && handleSend) ||
        (page === "celeb" && handleRemoveCeleb) ||
        (page === "prom" && handleRemoveProm) ||
        (page === "wedding" && handleRemoveWedding)
      }
    >
      {text}
    </Button>
  );
};

export default AddButton;
