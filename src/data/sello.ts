// Datos del sello. Fuente única para cabecera, pie y metadatos.
export const sello = {
  nombre: 'Modo manual',
  lema: 'Sin humo.',
  descripcion:
    'No ficción que trata al lector como adulto: datos, método y honestidad. Cero gurús, cero postureo, cero relleno.',
  autor: 'David Amigo',
  // Rellena cuando decidas el dominio:
  url: 'https://modomanual.es',
  email: 'hola@modomanual.es',
  redes: {
    x: '', // p.ej. 'https://x.com/tuusuario'
    youtube: '',
    linkedin: '',
  },
} as const;
