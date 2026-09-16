import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-noche text-arena">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-[1.2fr_1fr_1fr] gap-12">
        <div>
          <p className="font-display text-2xl font-bold mb-3">TINKUY</p>
          <p className="text-niebla max-w-xs">
            Productos que te hacen la vida mas sencilla, con envios a todo el Peru.
          </p>
        </div>
        <div id="pagos">
          <p className="font-medium mb-3">Metodos de pago</p>
          <ul className="text-niebla space-y-2 text-sm">
            <li>Yape / Plin</li>
            <li>Transferencia bancaria</li>
            <li>Contraentrega en Lima</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Recibe ofertas</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-niebla/20 py-6 text-center text-niebla text-sm">
        © {new Date().getFullYear()} TINKUY. Todos los derechos reservados.
      </div>
    </footer>
  );
}
