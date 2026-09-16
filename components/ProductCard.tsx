import Image from 'next/image';
import type { Product } from '@/lib/supabase';

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.compare_at_price && product.compare_at_price > product.price;

  return (
    <a
      href={`https://wa.me/51980769452?text=Hola!%20Me%20interesa%20${encodeURIComponent(product.name)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-noche/10">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.in_stock && (
          <span className="absolute top-3 left-3 bg-noche text-arena text-xs font-medium px-3 py-1 rounded-full">
            Agotado
          </span>
        )}
        {hasDiscount && product.in_stock && (
          <span className="absolute top-3 left-3 bg-tierra text-arena text-xs font-medium px-3 py-1 rounded-full">
            Oferta
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-noche leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-display font-bold text-noche">S/ {product.price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-niebla text-sm line-through">
              S/ {product.compare_at_price!.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
