// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ── CONFIGURACIÓN DE DESPLIEGUE ─────────────────────────────────────────────
// Dominio propio en producción: https://librosmodomanual.com
// (DNS en Cloudflare → GitHub Pages; public/CNAME fija el dominio en cada build).
// Los enlaces usan withBase()/BASE_URL, así que con base:'/' se sirven desde raíz.
const SITE = 'https://librosmodomanual.com';
const BASE = '/';

// Plugin rehype: prefija con la base los enlaces internos ("/algo") que se
// escriben en el Markdown del blog, para que no se rompan bajo subruta.
function rehypeBaseLinks() {
  const base = BASE.replace(/\/$/, '');
  /** @param {any} tree */
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && (node.tagName === 'a' || node.tagName === 'img')) {
        const attr = node.tagName === 'a' ? 'href' : 'src';
        const val = node.properties?.[attr];
        if (typeof val === 'string' && val.startsWith('/') && !val.startsWith('//')) {
          node.properties[attr] = base + val;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/go/') })],
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
});
