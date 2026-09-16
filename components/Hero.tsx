import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-noche text-arena overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[1.1fr_0.9fr] items-end">
        <div className="py-16 md:py-24 relative z-10">
          <p className="font-display text-sm text-mostaza mb-4">Tinkuy, en quechua, es el encuentro</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Conectamos lo que te importa
          </h1>
          <p className="text-niebla text-lg max-w-md mb-10">
            Seleccionamos productos practicos, los probamos y te los llevamos hasta la puerta de tu casa, en cualquier region del Peru.
          </p>

          
            href="#productos"
            className="inline-block rounded-md border-2 border-mostaza bg-mostaza text-noche font-display font-bold tracking-wide text-base md:text-lg px-8 py-4 hover:bg-arena hover:border-arena transition-colors mb-12"
          >
            COMPRALO YA
          </a>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-mostaza shrink-0">
                <path d="M3 16V6a1 1 0 011-1h9v11" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 9h4l4 4v3h-8V9z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7.5" cy="17.5" r="1.8" />
                <circle cx="17.5" cy="17.5" r="1.8" />
              </svg>
              <span className="font-display font-bold leading-tight">Entregas<br />rapidas</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-mostaza shrink-0">
                <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              <span className="font-display font-bold leading-tight">Llegamos<br />a donde estes</span>
            </div>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[560px] w-full">
          <Image
            src="/hero-tinkuy.jpg"
            alt="Repartidor Tinkuy entregando un paquete"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
