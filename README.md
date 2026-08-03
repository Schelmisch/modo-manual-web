# Modo manual — web

Web del sello editorial **Modo manual** («sin humo»). Hecha con [Astro](https://astro.build). Estática, rápida y pensada para SEO. Es el **motor 3** de la [estrategia de ventas](../Ventas/02%20-%20Estrategia/Estrategia%20de%20ventas.md).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Estructura

```
src/
├── data/          sello.ts + libros.ts  ← edita aquí el catálogo (fuente única)
├── layouts/       Base.astro
├── components/    Header · Footer · LibroCard · Newsletter
├── content/blog/  artículos en Markdown (colección de contenido)
├── styles/        global.css  ← sistema visual (paleta de la portada)
└── pages/
    ├── index.astro            home del sello
    ├── libros/                índice + página por libro ([slug])
    ├── blog/                  índice + artículo ([...slug])
    ├── newsletter.astro       landing de captura de email (imán)
    ├── aviso-legal.astro
    └── privacidad.astro
```

## Pendiente antes de publicar (ver `../Ventas`)

1. **Dominio**: ajusta `site` y `base` en `astro.config.mjs` y `url`/`email` en `src/data/sello.ts`.
2. **ASIN de Amazon**: rellena `amazon` en `src/data/libros.ts` para activar el botón de compra.
3. **Newsletter**: conecta el formulario de `src/components/Newsletter.astro` a MailerLite/Kit.
4. **Legal**: completa `aviso-legal.astro` y `privacidad.astro`.
5. **Redes**: rellena `sello.redes` en `src/data/sello.ts`.

## Añadir un artículo al blog

Crea un `.md` en `src/content/blog/` con este frontmatter:

```yaml
---
title: "Título"
description: "Resumen para SEO y para la tarjeta."
pubDate: 2026-08-10
libro: modo-manual   # opcional: slug del libro relacionado
draft: false
---
```

## Despliegue en GitHub Pages

Añade `.github/workflows/deploy.yml` con la action oficial `withastro/action` cuando crees el repo.
Regla de la casa: **nada se publica sin el OK de David**.
