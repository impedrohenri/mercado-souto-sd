"use client";

import { useRouter } from 'next/navigation';

// Interface definida localmente para evitar o import
interface Product {
  id: string | number;
  title: string;
  price: number;
  image?: string;
}

interface ProdutoCardProps {
  product: Product;
}

export default function ProdutoCard({ product }: ProdutoCardProps) {
  const router = useRouter();

  const onBuy = () => {
    router.push(`/checkout?productId=${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200 hover:border-gray-300 flex flex-col h-full group"
    >
      {/* Container da Imagem */}
      <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-lg p-4">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-gray-400 text-sm italic">Sem imagem</span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        <h2 className="text-sm font-medium text-gray-700 line-clamp-2 h-10">
          {product.title}
        </h2>

        <div className="mt-auto">
          <p className="text-xl font-bold text-green-600">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBuy();
            }}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-md transition-colors shadow-sm cursor-pointer"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}