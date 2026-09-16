export default function Hero() {
  return (
    <section className="bg-noche text-arena">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <p className="font-display text-sm text-marigold mb-4">Tinkuy, en quechua, es el encuentro</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Tecnologia util para tu dia a dia
          </h1>
          <p className="text-niebla text-lg max-w-md mb-8">
            Seleccionamos productos practicos, los probamos y te los llevamos hasta la puerta de tu casa, en cualquier region del Peru.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-full bg-marigold text-noche font-medium px-7 py-3.5 hover:bg-arena transition-colors"
            >
              Ver productos
            </a>
            <a
              href="https://wa.me/51980769452"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-niebla/40 text-arena font-medium px-7 py-3.5 hover:border-arena transition-colors"
            >
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-tierra/40 to-noche border border-niebla/20" />
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-marigold/30 to-noche border border-niebla/20 mt-8" />
        </div>
      </div>
    </section>
  );
}
