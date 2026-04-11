export default function Header() {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          Mercado Souto
        </div>

        {/* Search */}
        <div className="flex-1 flex sm:mx-6 order-4 sm:order-1">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full sm:w-[80%] min-w-75 mx-auto mt-2 px-4 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500 bg-amber-50"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 text-sm text-blue-700 order-3 font-bold">
          <button className="cursor-pointer  hover:bg-yellow-500 px-4 py-3 rounded-md">Entrar</button>
          <button className="cursor-pointer hover:bg-yellow-500 px-4 py-3 rounded-md">Carrinho</button>
        </div>

      </div>
    </header>
  );
}