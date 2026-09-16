'use client';

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder="Tu correo"
        className="min-w-0 flex-1 rounded-full bg-arena/10 border border-niebla/30 text-arena placeholder:text-niebla px-4 py-2.5 text-sm focus:outline-none focus:border-marigold"
      />
      <button
        type="submit"
        className="rounded-full bg-marigold text-noche text-sm font-medium px-5 py-2.5 whitespace-nowrap"
      >
        Suscribirme
      </button>
    </form>
  );
}
