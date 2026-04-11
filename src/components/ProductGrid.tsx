"use client";

interface Props{
    products: Product[]
}

export default function ProductGrid({products}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer border"
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
                onClick={() => (product)}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-md transition"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}