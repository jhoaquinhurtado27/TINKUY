-- Ejecuta esto en Supabase: Dashboard -> SQL Editor -> New query -> Run

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  price numeric(10,2) not null,
  compare_at_price numeric(10,2),
  image_url text not null,
  in_stock boolean not null default true,
  created_at timestamptz not null default now()
);

-- Habilita lectura publica (son productos de una tienda, deben verse sin login)
alter table products enable row level security;

create policy "Los productos son visibles para todos"
  on products for select
  using (true);

-- Datos de ejemplo, reemplaza por los tuyos
insert into products (name, slug, price, compare_at_price, image_url, in_stock) values
  ('Manta Electrica Calefactora Sherpa', 'manta-electrica-sherpa', 199.90, null, 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600', false),
  ('Pantalla Monitor Magnetica para Celular', 'pantalla-monitor-magnetica', 149.90, null, 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600', false),
  ('Soporte Magnetico para Celular para Auto', 'soporte-magnetico-auto', 99.90, null, 'https://images.unsplash.com/photo-1591290619762-c6c5b71fb1d2?w=600', false),
  ('Timbre Inteligente Tuya M9', 'timbre-inteligente-tuya-m9', 249.90, 399.90, 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', true),
  ('Gafas Inteligentes con Camara e IA', 'gafas-inteligentes-ia', 199.90, 299.90, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600', true);
