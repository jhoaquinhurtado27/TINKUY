import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TopNav from '@/components/TopNav';
import TickerBar from '@/components/TickerBar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { supabase, isSupabaseConfigured, type Product } from '@/lib/supabase';

// Se muestran mientras conectas Supabase, o si una consulta falla.
const fallbackProducts: Product[] = [
  { id: '1', name: 'Manta Electrica Calefactora Sherpa', price: 199.9, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600', slug: 'manta', in_stock: false, category: 'Hogar' },
  { id: '2', name: 'Pantalla Monitor Magnetica para Celular', price: 149.9, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600', slug: 'pantalla', in_stock: false, category: 'Tecnologia' },
  { id: '3', name: 'Soporte Magnetico para Celular para Auto', price: 99.9, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1591290619762-c6c5b71fb1d2?w=600', slug: 'soporte', in_stock: false, category: 'Accesorios' },
  { id: '4', name: 'Timbre Inteligente Tuya M9', price: 249.9, compare_at_price: 399.9, image_url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', slug: 'timbre', in_stock: true, category: 'Hogar' },
];

async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) return fallbackProducts;

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) return fallbackProducts;
    return data as Product[];
  } catch {
    return fallbackProducts;
  }
}

export const revalidate = 60; // vuelve a consultar Supabase cada 60s

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <TopNav />
      <TickerBar />
      <Hero />

      <section id="productos" className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold text-noche mb-6">Productos</h2>
        <ProductsSection products={products} />
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
