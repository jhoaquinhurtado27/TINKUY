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
  {
    id: '1',
    name: 'Manta Electrica Calefactora Sherpa',
    price: 199.9,
    compare_at_price: null,
    image_url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600',
    images: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
    ],
    description:
      'Manta calefactora ultra suave tipo sherpa con 3 niveles de temperatura y apagado automatico. Ideal para las noches frias, se lava facilmente y es apta para cama de 1 o 2 plazas.',
    slug: 'manta',
    in_stock: false,
    category: 'Hogar',
  },
  {
    id: '2',
    name: 'Pantalla Monitor Magnetica para Celular',
    price: 149.9,
    compare_at_price: null,
    image_url: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600',
    images: [
      'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800',
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800',
      'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800',
    ],
    description:
      'Pantalla portatil magnetica que convierte tu celular en un mini monitor extendido. Compatible con la mayoria de smartphones, ideal para trabajar, ver videos o presentaciones sobre la marcha.',
    slug: 'pantalla',
    in_stock: false,
    category: 'Tecnologia',
  },
  {
    id: '3',
    name: 'Soporte Magnetico para Celular para Auto',
    price: 99.9,
    compare_at_price: null,
    image_url: 'https://images.unsplash.com/photo-1591290619762-c6c5b71fb1d2?w=600',
    images: [
      'https://images.unsplash.com/photo-1591290619762-c6c5b71fb1d2?w=800',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    ],
    description:
      'Soporte magnetico de alta resistencia para el tablero o rejilla de ventilacion del auto. Instalacion en segundos, giro de 360 grados y agarre firme incluso en curvas.',
    slug: 'soporte',
    in_stock: false,
    category: 'Accesorios',
  },
  {
    id: '4',
    name: 'Timbre Inteligente Tuya M9',
    price: 249.9,
    compare_at_price: 399.9,
    image_url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1558002038-2c0d0d0c1234?w=800',
    ],
    description:
      'Timbre inteligente con camara HD, vision nocturna, audio bidireccional y notificaciones a tu celular via la app Tuya Smart. Ve quien esta en la puerta desde cualquier lugar.',
    slug: 'timbre',
    in_stock: true,
    category: 'Hogar',
  },
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
