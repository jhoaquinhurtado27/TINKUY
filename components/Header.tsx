export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-arena">
      <a href="/" className="font-display text-2xl font-bold text-noche">
        TINKUY
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-noche/80">
        <a href="/" className="hover:text-noche transition-colors">Inicio</a>
        <a href="#productos" className="hover:text-noche transition-colors">Productos</a>
        <a href="#contacto" className="hover:text-noche transition-colors">Contacto</a>
        <a href="#pagos" className="hover:text-noche transition-colors">Metodos de pago</a>
      </nav>
      <a
        href="#productos"
        className="rounded-full bg-noche text-arena text-sm font-medium px-5 py-2.5 hover:bg-tierra transition-colors"
      >
        Ver catalogo
      </a>
    </header>
  );
}
