import { ProductListProvider } from "./ProductList";

const Providers = ({ children }) => {
  return <ProductListProvider>{children}</ProductListProvider>;
};

export default Providers;
