// @ts-check
import { defineConfig } from 'astro/config';

// ── CONFIGURACIÓN DE DESPLIEGUE ─────────────────────────────────────────────
// Estado actual: GitHub Pages de proyecto → https://schelmisch.github.io/modo-manual-web/
// Cuando compres el dominio propio, cambia a:
//     site: 'https://TUDOMINIO',   base: '/',
// y crea public/CNAME con el dominio (ver README). Como los enlaces usan
// withBase()/BASE_URL, NO hay que tocar nada más: se adaptan solos.
const SITE = 'https://schelmisch.github.io';
const BASE = '/modo-manual-web/';

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
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
});
