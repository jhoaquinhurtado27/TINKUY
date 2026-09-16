# TINKUY — tienda propia (Next.js + Supabase + Vercel)

## 1. Probarlo en tu computadora (opcional)
```
npm install
npm run dev
```
Abre http://localhost:3000

## 2. Crear la base de datos en Supabase
1. Ve a https://supabase.com, crea una cuenta y un proyecto nuevo.
2. Entra a **SQL Editor** → **New query**, pega el contenido de `supabase/schema.sql` y dale **Run**.
   Esto crea la tabla `products` con 5 productos de ejemplo.
3. Ve a **Project Settings → API** y copia:
   - `Project URL`
   - `anon public key`

## 3. Subir el proyecto a GitHub
```
git init
git add .
git commit -m "Tienda TINKUY"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tinkuy-store.git
git push -u origin main
```
(Crea antes el repo vacío en github.com/new)

## 4. Desplegar en Vercel
1. Ve a https://vercel.com → **Add New → Project** → importa el repo `tinkuy-store`.
2. En **Environment Variables** agrega:
   - `NEXT_PUBLIC_SUPABASE_URL` = la Project URL de Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = la anon key de Supabase
3. Dale **Deploy**. En ~1 minuto tienes tu URL pública (`tinkuy-store.vercel.app`).

## 5. Actualizar productos
Edita la tabla `products` directamente en Supabase (Table Editor) — precio, imagen, stock —
y los cambios aparecen en la web sin volver a desplegar (se refresca cada 60 segundos).

## 6. Cambiar textos, WhatsApp o colores
- Número de WhatsApp: buscar `51980769452` en `components/` y reemplazar.
- Colores: `tailwind.config.ts`.
- Textos del hero: `components/Hero.tsx`.

## 7. Dominio propio
En Vercel → tu proyecto → **Settings → Domains** → agrega tu dominio (ej. `tinkuy.pe`)
y sigue las instrucciones de DNS que te muestra Vercel.
