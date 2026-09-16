import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Si aun no configuraste las variables de entorno, usamos una URL de relleno
// valida para que el build no falle; app/page.tsx detecta isSupabaseConfigured
// y usa los productos de respaldo en ese caso, sin llegar a consultar nada.
export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder-anon-key'
);

export type Product = {
  id: string;
  name: string;
  price: number;
  compare_at_price: number | null;
  image_url: string;
  slug: string;
  in_stock: boolean;
};
