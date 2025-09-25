
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

/*
exaMple usage: IT WILL LOOP THROUGH EACH PRODUCT IN THE PRODUCTS ARRAY AND 
RENDER A ProductCard COMPONENT FOR EACH ONE, PASSING THE PRODUCT DATA AS A PROP.
 <ProductCard key={product.id} product={product}
 
<ProductCard key={1} product={{ id: 1, name: "Apple" }} />
<ProductCard key={2} product={{ id: 2, name: "Banana" }} />
<ProductCard key={3} product={{ id: 3, name: "Cherry" }} /> */