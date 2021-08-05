import { ProductListProvider } from "./ProductList";
import { PromCartProvider } from "./CartProm";
import { WeddingCartProvider } from "./CartWedding";
import { CelebCartProvider } from "./CartCeleb";

const Providers = ({ children }) => {
  return (
    <ProductListProvider>
      <PromCartProvider>
        <WeddingCartProvider>
          <CelebCartProvider>{children}</CelebCartProvider>
        </WeddingCartProvider>
      </PromCartProvider>
    </ProductListProvider>
  );
};

export default Providers;
