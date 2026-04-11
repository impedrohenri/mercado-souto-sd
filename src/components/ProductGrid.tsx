"use client";

import ProdutoCard from "./ProdutoCard";

interface Props{
    products: Product[]
}

export default function ProductGrid({products}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        
        {products.map((product) => (
          <ProdutoCard key={product.id} product={product} />
        ))}

      </div>
    </div>
  );
}