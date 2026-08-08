import { afiliados } from '../data/sello';

// Añade el tag de Amazon Afiliados a una URL de Amazon (si hay tag configurado).
// Sin tag, devuelve la URL tal cual. Respeta los parámetros que ya tenga.
export function amazonUrl(url?: string): string {
  if (!url) return url ?? '';
  if (!afiliados.amazonTag) return url;
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}tag=${afiliados.amazonTag}`;
}
