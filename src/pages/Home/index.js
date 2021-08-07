import { useContext, useEffect } from "react";
import Card from "../../components/Card";
import { ProductListContext } from "../../providers/ProductList";
import api from "../../services/api";
import { Container } from "./styles";

const Home = () => {
  const { productList, setProductList } = useContext(ProductListContext);

  const getDrinks = () => {
    api.get().then((res) => {
      setProductList(res.data);
    });
  };

  useEffect(() => getDrinks(), []);

  return (
    <Container>
      {productList.map((item) => (
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
          type="add"
        />
      ))}
    </Container>
  );
};

export default Home;
