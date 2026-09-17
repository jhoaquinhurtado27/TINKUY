'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Product } from '@/lib/supabase';

export const WHATSAPP_NUMBER = '51980769452';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  qty: number;
};

type StoreContextValue = {
  // Búsqueda
  query: string;
  setQuery: (q: string) => void;

  // Carrito
  cart: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;

  // Ir al WhatsApp con el carrito armado
  checkoutOnWhatsApp: () => void;
  // Consultar un solo producto por WhatsApp
  askProductOnWhatsApp: (product: Product) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, image_url: product.image_url, qty },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) => (item.id === id ? { ...item, qty } : item));
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.qty * item.price, 0), [cart]);

  const checkoutOnWhatsApp = useCallback(() => {
    if (cart.length === 0) {
      window.open(
        buildWhatsAppUrl('Hola! Quisiera hacer una consulta.'),
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    const lines = cart.map(
      (item) => `- ${item.name} x${item.qty} (S/ ${(item.price * item.qty).toFixed(2)})`
    );
    const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    const message = [
      'Hola! Quisiera hacer este pedido:',
      '',
      ...lines,
      '',
      `Total: S/ ${total.toFixed(2)}`,
    ].join('\n');

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }, [cart]);

  const askProductOnWhatsApp = useCallback((product: Product) => {
    const message = `Hola! Me interesa ${product.name} (S/ ${product.price.toFixed(2)})`;
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  }, []);

  const value: StoreContextValue = {
    query,
    setQuery,
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartCount,
    cartTotal,
    checkoutOnWhatsApp,
    askProductOnWhatsApp,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore debe usarse dentro de StoreProvider');
  return ctx;
}
