'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'inicio', label: 'INICIO', href: '#inicio' },
  { id: 'productos', label: 'PRODUCTOS', href: '#productos' },
  { id: 'contacto', label: 'CONTACTO', href: '#contacto' },
  { id: 'pagos', label: 'METODOS DE PAGO', href: '#pagos' },
];

export default function TopNav() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-noche sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3.5">
        <nav className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold tracking-wide overflow-x-auto no-scrollbar">
          <a href="#inicio" className="text-mostaza shrink-0 mr-2">TINKUY</a>
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`shrink-0 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  isActive ? 'bg-mostaza text-noche' : 'text-arena hover:text-mostaza'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-4 text-arena shrink-0 pl-4">
          <button aria-label="Buscar" className="hover:text-mostaza transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
          <button aria-label="Cuenta" className="hover:text-mostaza transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" strokeLinecap="round" />
            </svg>
          </button>
          <a href="#productos" aria-label="Carrito" className="relative hover:text-mostaza transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-mostaza text-noche text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
