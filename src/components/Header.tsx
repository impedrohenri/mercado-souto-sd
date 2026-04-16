import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">


        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
          <img
            src="/mercado.png"
            alt="Logo Mercado Souto"
            className="w-15 h-15 object-contain"
          />
          <div className="text-2xl font-bold text-blue-700">
            Mercado Souto
          </div>
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 flex sm:mx-6 order-4 sm:order-1">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full sm:w-[80%] min-w-75 mx-auto mt-2 px-4 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500 bg-amber-50"
          />
        </div>

    
        <div className="flex items-center gap-2 text-sm text-blue-700 order-3 font-bold">
  
          <div className="flex items-center gap-2 cursor-pointer  px-3 py-2 transition-colors">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white">
              {/* Ícone de Usuário em SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <span className="hidden sm:block">Batista</span>
          </div>
          <div className="relative flex items-center gap-2 cursor-pointer px-3 py-2 transition-colors">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
        
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-yellow-400">
                2
              </span>
            </div>
            <span className="hidden sm:block">Carrinho</span>
          </div>
      </div>
    </div>
    </header >
  );
}