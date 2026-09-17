'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import type { Product } from '@/lib/supabase';

const TODAS = 'Todas';

export default function ProductsSection({ products }: { products: Product[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
    return [TODAS, ...unique];
  }, [products]);

  const [selected, setSelected] = useState(TODAS);

  const filtered = useMemo(() => {
    if (selected === TODAS) return products;
    return products.filter((p) => p.category === selected);
  }, [products, selected]);

  return (
    <>
      <CategoryFilter categories={categories} selected={selected} onSelect={setSelected} />

      {filtered.length === 0 ? (
        <p className="text-niebla">No hay productos en esta categoria por ahora.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
