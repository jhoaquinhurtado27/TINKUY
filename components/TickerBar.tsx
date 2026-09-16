const items = ['TINKUY TE PROTEGE', '🛡️ productos 100% calidad'];
const loop = [...items, ...items, ...items, ...items];

export default function TickerBar() {
  return (
    <div className="bg-noche border-y border-arena/10 overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...loop, ...loop].map((text, i) => (
          <span
            key={i}
            className="mx-8 text-arena text-sm font-bold tracking-wide shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
