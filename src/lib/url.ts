// Une una ruta absoluta ("/libros") con la base del sitio.
// En dominio propio BASE_URL = "/"  → withBase("/libros") = "/libros"
// En GitHub project page BASE_URL = "/modo-manual-web/" → "/modo-manual-web/libros"
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}
