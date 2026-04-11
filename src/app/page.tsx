import ProductGrid from "@/components/ProductGrid";
import Produtos from "@/data/products.js";

export default function Home() {
  const Products: Product[] = Produtos;
  
  return (
    <>
    <ProductGrid products={Products} />
    </>
  );
}
