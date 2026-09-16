export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51980769452?text=Hola!%20Quisiera%20consultar%20sobre%20un%20producto"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.17c-.25.7-1.25 1.28-2.04 1.45-.55.11-1.26.2-3.66-.78-3.07-1.27-5.05-4.38-5.2-4.58-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.53c.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.06 2.18 1.38 2.48 1.53.3.15.47.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
      </svg>
    </a>
  );
}
