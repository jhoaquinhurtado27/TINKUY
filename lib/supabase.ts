import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(rawUrl && rawUrl.trim() && rawKey && rawKey.trim());

const supabaseUrl = isSupabaseConfigured ? (rawUrl as string) : 'https://placeholder.supabase.co';
const supabaseAnonKey = isSupabaseConfigured ? (rawKey as string) : 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  price: number;
  compare_at_price: number | null;
  image_url: string;
  slug: string;
  in_stock: boolean;
};
