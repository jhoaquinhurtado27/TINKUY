'use client';

export default function Header() {
  return (
    <header className="bg-mostaza">
      <div className="flex items-center gap-4 md:gap-8 px-4 md:px-12 py-4">
        {/* Menu hamburguesa (mobile) */}
        <button className="md:hidden text-noche" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo */}
        <a href="/" className="flex flex-col items-start shrink-0">
          <span className="bg-noche text-arena font-display font-bold text-xl md:text-2xl px-3 py-1.5 tracking-wide">
            TINKUY
          </span>
          <span className="text-noche text-[10px] md:text-xs font-medium tracking-wide mt-1 hidden sm:block">
            TU TIENDA DE CONFIANZA
          </span>
        </a>

        {/* Buscador */}
        <form
          className="hidden md:flex flex-1 max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Buscar en la tienda..."
            className="flex-1 rounded-l-md border-0 px-4 py-2.5 text-sm text-noche placeholder:text-noche/50 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-noche text-arena text-sm font-bold px-5 rounded-r-md hover:bg-noche/80 transition-colors"
          >
            BUSCAR
          </button>
        </form>

        <div className="flex-1 md:hidden" />

        {/* Acciones */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button className="bg-noche/90 text-arena text-xs md:text-sm font-bold tracking-wide px-4 py-2.5 rounded hover:bg-noche transition-colors">
            INICIAR SESION
          </button>
          <a
            href="#productos"
            className="bg-noche text-mostaza text-xs md:text-sm font-bold tracking-wide px-4 py-2.5 rounded hover:bg-noche/80 transition-colors"
          >
            CARRITO: 0 ARTICULOS
          </a>
        </div>
      </div>
    </header>
  );
}
