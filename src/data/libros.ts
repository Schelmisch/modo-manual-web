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
export const serie2 = 'Sin humo';
export const serie3 = 'A ciencia cierta';

// Metadatos de cada serie (para las secciones de la web).
export const series = [
  {
    nombre: serie1,
    descripcion:
      'Cuatro libros para leer la era de la inteligencia artificial sin perder la cabeza: el marco general, el negocio, el dinero y lo que le queda al humano. Empieza por el primero; cada uno abre el siguiente.',
  },
  {
    nombre: serie2,
    descripcion:
      'Finanzas, negocio e inversión sin gurús ni postureo, con una regla en cada página: separar lo que funciona de lo que te venden. De la deuda a la libertad, paso a paso. Los cinco, ya a la venta.',
  },
  {
    nombre: serie3,
    descripcion:
      'Salud sin milagros ni pánicos: comida, ejercicio, sueño y longevidad separando lo poco que de verdad mueve la aguja del humo que lo tapa, con dato y fuente y sin culpa. Un detector de humos para tu cuerpo. Los dos primeros, ya a la venta.',
  },
];

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
    amazon: 'https://www.amazon.es/dp/B0HCNY9NC6', // ASIN Kindle (los 3 formatos enlazados en la misma ficha)
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
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
      '«El que ejecuta le gana al que opina.» Si diriges un negocio de verdad, estás en el lado bueno de este cambio: la fricción que arruina a las grandes consultoras —lo lento, local y sucio de encajar la IA en el mundo real— es tu terreno. Es tu foso. Un manual de campo, no de predicciones, escrito por quien friega y programa a la vez.',
    puntos: [
      'Qué protege de verdad a un negocio cuando la tecnología se abarata cada año.',
      'Dónde está el foso y dónde solo lo parece.',
      'Decisiones de operador con la cabeza fría, sin modas.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCR7RTRL', // los 3 formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
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
      'En una fiebre del oro, la apuesta fiable no es el oro: son los picos y las palas. Este libro parte de un susto real —descubrir que tu fondo «diversificado» es, sin saberlo, una apuesta directa a la IA— y te enseña a leer dónde están el valor y el riesgo. No es consejo de inversión: es el mapa para decidir tú, con la cabeza fría.',
    puntos: [
      'Quién gana de verdad en una fiebre del oro (y no siempre es quien busca oro).',
      'Cómo separar la narrativa de mercado de los números.',
      'Leer el riesgo antes de que te lo cuenten.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCR35XP2', // los 3 formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
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
      'Dos personas, la misma máquina en el bolsillo. Una se dejó llevar; la otra decidió que hay cosas que no delega. La diferencia no la decide la tecnología: la decides tú. Cuando la máquina lo hace casi todo, lo que solo aporta un humano —criterio, atención, vínculo, sentido— no baja de precio: sube. El cierre de la serie.',
    puntos: [
      'Dónde sube la prima de lo humano y dónde se hunde.',
      'Las capacidades que la máquina no sustituye (todavía).',
      'Cómo protegerlas sin nostalgia ni negacionismo.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCRCVXGN', // los 3 formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },

  // ── Serie «Sin humo» (finanzas / negocio / inversión) — publicada ──
  {
    slug: 'de-cero-a-libre',
    titulo: 'De cero a libre',
    subtitulo: 'Modo manual para construir libertad financiera desde la deuda, sin atajos ni humo',
    serie: serie2,
    numero: 1,
    estado: 'publicado',
    ancla: true,
    portada: '/portadas/de-cero-a-libre.jpg',
    sinopsis:
      'Este libro no va de trabajar más: va justo de lo contrario. Con un sueldo normal, solo ahorrando, no vas a hacerte libre. El viaje entero cabe en una línea —de cobrar un sueldo, a facturar, a que tu dinero facture por ti— con una sola regla: separar lo que funciona de lo que te venden.',
    puntos: [
      'Los tres escalones del dinero y por qué solo el sueldo no basta.',
      'La brújula: el valor está en el tiempo, no en facturar más.',
      'Sin recetas de talla única: cambia según de dónde partas.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDGHJGFF', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'el-primer-negocio',
    titulo: 'El primer negocio',
    subtitulo: 'Comprar o montar el negocio que te da tiempo, sin humo',
    serie: serie2,
    numero: 2,
    estado: 'publicado',
    portada: '/portadas/el-primer-negocio.jpg',
    sinopsis:
      'Salir del sueldo para siempre pasa, para casi todos, por emprender. Pero el buen negocio no es el que más factura: es el que factura y encima te deja tiempo. Un manual de campo para montar —o comprar— tu primer negocio con el criterio del tiempo.',
    puntos: [
      'Por qué muchas veces comprar en marcha gana a montar de cero.',
      'El criterio del tiempo: no confundir facturar con ser libre.',
      'Escrito por quien lo hace con dinero de verdad en juego.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDG21WBW', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'que-tu-dinero-trabaje',
    titulo: 'Que tu dinero trabaje',
    subtitulo: 'Invertir sin humo cuando empiezas de cero',
    serie: serie2,
    numero: 3,
    estado: 'publicado',
    portada: '/portadas/que-tu-dinero-trabaje.jpg',
    sinopsis:
      '¿Nunca has invertido y todo te suena a chino o a estafa? Empieza por lo aburrido y honesto —indexar— y por la verdad que casi nadie te dice: tu fondo «global» quizá está más concentrado de lo que crees. No es consejo de inversión: es aprender a pensar tu dinero.',
    puntos: [
      'Indexar como default honesto, explicado desde cero.',
      'Interés compuesto y largo plazo, sin promesas de doblar tu dinero.',
      'La concentración oculta de tu índice mundial.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDGLY9YM', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'elegir-sin-humo',
    titulo: 'Elegir sin humo',
    subtitulo: 'Leer cualquier inversión y dirigir tú una parte, con método',
    serie: serie2,
    numero: 4,
    estado: 'publicado',
    portada: '/portadas/elegir-sin-humo.jpg',
    sinopsis:
      'El nivel 2: cuando indexar ya no te basta y quieres entender qué compras. Cómo leer cualquier activo —acciones, ETF, bonos, cripto, derivados— con método: riesgo primero, dato verificado y punto de invalidez. No es una lista de qué comprar; es la forma de leer el mapa.',
    puntos: [
      'Riesgo primero: saber de antemano en qué te habrías equivocado.',
      'Leer acciones, ETF, bonos, cripto y derivados con el mismo método.',
      'Cazar oportunidades a largo plazo sin comprar la moda ni el pánico.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDFLKC68', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'proteger-y-llegar',
    titulo: 'Proteger y llegar',
    subtitulo: 'Cuidar lo que ya tienes y vivir de ello',
    serie: serie2,
    numero: 5,
    estado: 'publicado',
    portada: '/portadas/proteger-y-llegar.jpg',
    sinopsis:
      'Construir riqueza es media carrera; la otra media —la que casi nadie enseña— es no arruinarte cerca de la meta y aprender a vivir de lo que tienes. Riesgo de secuencia, la regla del 4% y sus límites reales, seguros, inflación en la meta y legado. El cierre de la serie.',
    puntos: [
      'Riesgo de secuencia: por qué el orden de los años malos importa.',
      'La regla del 4% y sus límites, sin la parte bonita solo.',
      'Vivir de tus inversiones sin arruinarte cerca del final.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDGCN9Q8', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },

  // ── Serie «A ciencia cierta» (salud / ciencia) — libros 1 y 2 publicados; 3-5 próximamente ──
  {
    slug: 'comes-lo-que-te-cuentan',
    titulo: 'Comes lo que te cuentan',
    subtitulo: 'Nutrición sin milagros ni pánicos: lo que de verdad mueve la aguja de tu plato',
    serie: serie3,
    numero: 1,
    estado: 'publicado',
    ancla: true,
    portada: '/portadas/comes-lo-que-te-cuentan.jpg',
    sinopsis:
      'El circo de las dietas milagro, los superalimentos y el detox mueve mucho dinero manteniéndote confundido, culpable y comprando. Este libro es un detector de humos para el plato: separa el puñado de cosas que la evidencia sostiene del ruido que las tapa, con dato y fuente, sin culpa ni sermón. No es una dieta: es aprender a comer con criterio y dejar de comer lo que te cuentan.',
    puntos: [
      'El puñado de cosas que de verdad mueven la aguja (y el ruido que las tapa).',
      'Dieta milagro, superalimento y detox: por qué venden tanto y sirven tan poco.',
      'Comer con criterio, sin culpa ni sermón, con dato y fuente.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDFRQC9L', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa blanda', precio: '10,39 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'mover-el-esqueleto',
    titulo: 'Mover el esqueleto',
    subtitulo: 'Ejercicio y músculo sin mitos: lo poco que de verdad te hace fuerte y te mantiene sano',
    serie: serie3,
    numero: 2,
    estado: 'publicado',
    portada: '/portadas/mover-el-esqueleto.jpg',
    sinopsis:
      'La industria del fitness vive de que creas que moverte es complicado, caro y agotador: máquinas, gadgets, suplementos y rutinas imposibles. Este libro separa lo que de verdad mueve la aguja —fuerza, moverte a diario, la dosis mínima eficaz— del humo que lo tapa, con dato y fuente y sin culpa. No es un plan de gimnasio: es entender qué le pasa a tu cuerpo cuando lo mueves.',
    puntos: [
      'Fuerza y dosis mínima eficaz: lo poco que de verdad funciona.',
      'Máquinas, gadgets y zonas quema-grasa: el humo que puedes soltar.',
      'Por dónde empezar sin gimnasio ni rutinas imposibles.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HDG23J3R', // Kindle; formatos enlazados en la misma ficha
    precios: [
      { formato: 'eBook Kindle', precio: '4,99 €' },
      { formato: 'Tapa dura', precio: '16,63 €' },
    ],
  },
  {
    slug: 'cuando-apagas-la-luz',
    titulo: 'Cuando apagas la luz',
    subtitulo: 'Sueño y descanso sin mitos: lo que de verdad te hace dormir (y lo que solo te lo vende)',
    serie: serie3,
    numero: 3,
    estado: 'proximamente',
    portada: '/portadas/cuando-apagas-la-luz.jpg',
    sinopsis:
      'El sueño se ha convertido en un mercado: apps que te puntúan la noche, pulseras que miden tus fases, melatonina, gafas de luz azul, colchones inteligentes. Y cuanto más se mide, peor duerme la gente. Este libro separa lo que de verdad mueve la aguja del sueño —la regularidad, la luz, unos pocos hábitos— del humo que lo tapa, para que vuelvas a dormir tranquilo.',
    puntos: [
      'Regularidad, luz y unos pocos hábitos: lo que de verdad importa.',
      'Por qué cuanto más se mide el sueño, peor se duerme.',
      'Dejar de perseguir la noche perfecta y volver a descansar.',
    ],
  },
  {
    slug: 'comprar-anos',
    titulo: 'Comprar años',
    subtitulo: 'Longevidad, suplementos y biohacking sin mitos: lo que de verdad te da años (y lo que solo te los vende)',
    serie: serie3,
    numero: 4,
    estado: 'proximamente',
    portada: '/portadas/comprar-anos.jpg',
    sinopsis:
      'La longevidad es el negocio más rentable del bienestar: pastillas de la eterna juventud, goteros de NAD+, relojes de edad biológica, crioterapia y gurús que prometen que morir es opcional. Y casi nada de eso te da un solo día de vida sana. Este libro separa lo que de verdad alarga la vida del humo que lo tapa, sin falsa esperanza, para que dejes de comprar años en frascos.',
    puntos: [
      'Lo que de verdad alarga la vida: no fumar, moverte, dormir, no estar solo.',
      'NAD+, edad biológica y eterna juventud: el humo caro que se vende.',
      'Qué te compra años de verdad, con dato y sin falsa esperanza.',
    ],
  },
  {
    slug: 'la-letra-pequena-de-la-salud',
    titulo: 'La letra pequeña de la salud',
    subtitulo: 'Cómo leer cualquier estudio, titular o consejo de salud sin que te la cuelen',
    serie: serie3,
    numero: 5,
    estado: 'proximamente',
    portada: '/portadas/la-letra-pequena-de-la-salud.jpg',
    sinopsis:
      'Casi todo lo que crees saber sobre tu salud lo has aprendido de titulares, y casi todos los titulares exageran, tergiversan o inventan. Este libro no trata un tema de salud: enseña a leerlos todos. Asociación frente a causa, ratón frente a humano, riesgo relativo frente a absoluto, oler un conflicto de interés. No es un libro que caduca: es un detector de humos universal. El cierre de la serie.',
    puntos: [
      'Asociación no es causa, y el ratón no es un humano.',
      'Riesgo relativo frente a absoluto: el truco favorito del titular.',
      'Un detector de humos universal, para que lo veas tú sin que te lo digan.',
    ],
  },
];

export const anclaSlug = libros.find((l) => l.ancla)?.slug ?? 'modo-manual';
