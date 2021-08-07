import { ProductListProvider } from "./ProductList";
import { PromCartProvider } from "./CartProm";
import { WeddingCartProvider } from "./CartWedding";
import { CelebCartProvider } from "./CartCeleb";
import { OptionProvider } from "./Option";

const Providers = ({ children }) => {
  return (
    <ProductListProvider>
      <PromCartProvider>
        <WeddingCartProvider>
          <CelebCartProvider>
            <OptionProvider>{children}</OptionProvider>
          </CelebCartProvider>
        </WeddingCartProvider>
      </PromCartProvider>
    </ProductListProvider>
  );
};

export default Providers;
