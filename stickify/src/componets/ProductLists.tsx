
import ProductCard from "./Products";
import { products} from "../products";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
