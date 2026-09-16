export default function Hero() {
  return (
    <section
      className="relative bg-noche text-arena bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-tinkuy.jpg')" }}
    >
      {/* Overlay para legibilidad sobre la foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-noche/80 via-noche/30 to-noche/70" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40 flex items-center justify-center min-h-[420px] md:min-h-[560px]">
        <a
          href="#productos"
          className="rounded-md border-2 border-arena/90 bg-noche/40 backdrop-blur-sm text-arena font-display font-bold tracking-wide text-base md:text-lg px-8 py-4 hover:bg-arena hover:text-noche transition-colors"
        >
          COMPRALO YA
        </a>
      </div>

      {/* Badges de entrega (esquina inferior derecha) */}
      <div className="relative md:absolute md:bottom-8 md:right-10 flex flex-wrap justify-center gap-6 md:gap-8 pb-8 md:pb-0 px-6">
        <div className="flex items-center gap-3 text-arena">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 16V6a1 1 0 011-1h9v11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 9h4l4 4v3h-8V9z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7.5" cy="17.5" r="1.8" />
            <circle cx="17.5" cy="17.5" r="1.8" />
          </svg>
          <span className="font-display font-bold leading-tight">Entregas<br />rapidas</span>
        </div>
        <div className="flex items-center gap-3 text-arena">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="9.5" r="2.4" />
          </svg>
          <span className="font-display font-bold leading-tight">Llegamos<br />a donde estes</span>
        </div>
      </div>
    </section>
  );
}
