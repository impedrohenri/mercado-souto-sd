import React from 'react'

interface ProdutoCardProps {
    product: Product
}

export default function ProdutoCard({product}: ProdutoCardProps) {

    const onBuy = (product: Product) => {
        alert(`Produto comprado: ${product.title} por R$ ${product.price.toFixed(2)}`);
    }

  return (
    <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer border border-gray-200 hover:border-gray-300"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full"
                />
              ) : (
                <span className="text-gray-400 text-sm">
                  Sem imagem
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col gap-2">
              
              <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
                {product.title}
              </h2>

              <p className="text-lg font-semibold text-green-600">
                R$ {product.price.toFixed(2)}
              </p>

              <button
                onClick={() => onBuy(product)}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-md transition"
              >
                Comprar
              </button>
            </div>
          </div>
  )
}
