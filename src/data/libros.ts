// Catálogo de libros. Espejo de /Ventas/01 - Catálogo/Catálogo de libros.md
// Rellena `amazon` con el enlace real cuando tengas el ASIN.
export type Libro = {
  slug: string;
  titulo: string;
  subtitulo: string;
  serie: string;
  numero: number;
  estado: 'publicado' | 'proximamente';
  ancla?: boolean;
  portada: string; // ruta en /public
  sinopsis: string;
  puntos: string[]; // bullets para la página del libro
  amazon?: string; // enlace a la ficha de Amazon (rellenar con el ASIN)
  precios?: { formato: string; precio: string }[];
};

export const serie1 = 'El cambio que viene';

export const libros: Libro[] = [
  {
    slug: 'modo-manual',
    titulo: 'Modo manual',
    subtitulo: 'Cómo leer la era de la inteligencia artificial sin perder la cabeza',
    serie: serie1,
    numero: 1,
    estado: 'publicado',
    ancla: true,
    portada: '/portadas/modo-manual.jpg',
    sinopsis:
      'Hay demasiados libros sobre inteligencia artificial, y casi todos hacen una de dos cosas: prometerte el paraíso o anunciarte el fin. Este no va de eso. Es un libro para aprender a leer el cambio por ti mismo y decidir con la cabeza fría, con una sola regla en cada página: separar lo que se sabe de lo que se supone.',
    puntos: [
      'Los dos relojes que casi todos confunden: por qué la tecnología corre y la transformación real llega despacio.',
      'Por qué la lentitud no es un consuelo: el peligro no es un robot que te quita el puesto, sino la erosión silenciosa de tu criterio.',
      'Qué pasa de verdad con el trabajo, el dinero, el poder y la energía cuando se aparta el ruido.',
      'Cómo usar la máquina como copiloto y no como piloto automático.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCNY9NC6', // ASIN Kindle
    precios: [
      { formato: 'eBook Kindle', precio: '4,32 €' },
    ],
  },
  {
    slug: 'foso-de-operador',
    titulo: 'Foso de operador',
    subtitulo: 'Modo manual para el que dirige un negocio en la era de la IA',
    serie: serie1,
    numero: 2,
    estado: 'publicado',
    portada: '/portadas/foso-de-operador.jpg',
    sinopsis:
      'Cómo construir defensibilidad real —un foso— para un negocio en la era de la inteligencia artificial, cuando la ventaja de ayer caduca a toda velocidad.',
    puntos: [
      'Qué protege de verdad a un negocio cuando la tecnología se abarata cada año.',
      'Dónde está el foso y dónde solo lo parece.',
      'Decisiones de operador con la cabeza fría, sin modas.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCR7RTRL',
    precios: [{ formato: 'eBook Kindle', precio: '4,99 €' }],
  },
  {
    slug: 'picos-y-palas',
    titulo: 'Picos y palas',
    subtitulo: 'Modo manual para tu dinero en la era de la IA',
    serie: serie1,
    numero: 3,
    estado: 'publicado',
    portada: '/portadas/picos-y-palas.jpg',
    sinopsis:
      'Dónde se concentra de verdad el valor y el riesgo en la fiebre del oro de la IA. No es consejo de inversión: es aprender a leer el mapa.',
    puntos: [
      'Quién gana de verdad en una fiebre del oro (y no siempre es quien busca oro).',
      'Cómo separar la narrativa de mercado de los números.',
      'Leer el riesgo antes de que te lo cuenten.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCR35XP2',
    precios: [{ formato: 'eBook Kindle', precio: '4,99 €' }],
  },
  {
    slug: 'la-prima-de-lo-humano',
    titulo: 'La prima de lo humano',
    subtitulo: 'Modo manual para no dejar de ser humano en la era de la IA',
    serie: serie1,
    numero: 4,
    estado: 'publicado',
    portada: '/portadas/la-prima-de-lo-humano.jpg',
    sinopsis:
      'Qué le queda —y qué vale más— al humano cuando la máquina lo hace casi todo. El cierre de la serie.',
    puntos: [
      'Dónde sube la prima de lo humano y dónde se hunde.',
      'Las capacidades que la máquina no sustituye (todavía).',
      'Cómo protegerlas sin nostalgia ni negacionismo.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCRCVXGN',
    precios: [{ formato: 'eBook Kindle', precio: '4,99 €' }],
  },
];

export const anclaSlug = libros.find((l) => l.ancla)?.slug ?? 'modo-manual';
