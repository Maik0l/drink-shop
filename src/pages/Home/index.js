import { useEffect } from "react";
import api from "../../services/api";

const Home = () => {
  const getDrinks = () => {
    api.get().then((res) => console.log(res.data));
  };

  useEffect(() => {
    getDrinks();
  });
  return <div>Home</div>;
};

export default Home;
