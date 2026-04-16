"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import products from "@/data/products.js";
import NAMESPACE_URL from "@/api/NameSpace";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productId = Number(searchParams.get("productId"));

  const product = (products as Product[]).find(p => p.id === productId);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-6">Produto não encontrado</div>;
  }

  const total = product.price * quantity;

  const handleBuy = async () => {

    const res = await fetch(NAMESPACE_URL + "/preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: product.title,
        price: product.price,
        quantity: quantity
      })
    });

    const data = await res.json();

    if (!data.init_point) {
      console.error("Erro:", data);
      alert("Erro ao iniciar pagamento");

      return;
    }

    window.location.href = data.init_point;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <h1 className="text-2xl font-semibold mb-6">
        Finalizar compra
      </h1>

      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6">
        
        {/* Imagem */}
        <div className="w-full md:w-1/3 h-64 bg-gray-100 flex items-center justify-center">
          {product.image ? (
            <img src={product.image} className="object-contain h-full" />
          ) : (
            <span className="text-gray-400">Sem imagem</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-4">
          
          <h2 className="text-xl font-medium">{product.title}</h2>

          <p className="text-gray-600 text-sm">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-green-600">
            R$ {product.price.toFixed(2)}
          </p>

          {/* Quantidade */}
          <div className="flex items-center gap-3">
            <span>Quantidade:</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border rounded px-2 py-1"
            />
          </div>

          {/* Total */}
          <p className="text-lg font-medium">
            Total: R$ {total.toFixed(2)}
          </p>

          {/* Pagamento */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Método de pagamento
            </p>

            <div className="border rounded p-3 flex items-center justify-between">
              <span>Mercado Pago</span>
              <span className="text-green-600 text-sm">Disponível</span>
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={handleBuy}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg"
          >
            Continuar para pagamento
          </button>

        </div>
      </div>
    </div>
  );
}