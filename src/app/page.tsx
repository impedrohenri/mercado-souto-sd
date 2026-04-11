import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Image from "next/image";
import Produtos from "@/data/products.js";

export default function Home() {
  const Products: Product[] = Produtos;
  
  return (
    <>
    <Header/>
    <ProductGrid products={Products} />
    </>
  );
}
