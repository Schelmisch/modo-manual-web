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
export const serie3 = 'Desclasificados';
export const serie4 = 'Sin banderas';
export const serie5 = 'Historia sin mitos';

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
      'Finanzas, negocio e inversión sin gurús ni postureo, con una regla en cada página: separar lo que funciona de lo que te venden. De la deuda a la libertad, paso a paso. (Próximamente.)',
  },
  {
    nombre: serie3,
    descripcion:
      'Coge los temas más saturados de humo que existen —OVNIs, secretos de Estado, los grandes misterios de sobremesa— y les aplica la regla de la casa: separar lo que se sabe de lo que se supone. Ni creyente ni negacionista: exigente con la evidencia, honesto con la incertidumbre. (Próximamente.)',
  },
  {
    nombre: serie4,
    descripcion:
      'Los temas que más te encienden —inmigración, islam, hombres y mujeres— mirados con datos y sin bandera de ningún bando: la misma vara para los dos lados. Una sola idea los ordena: te hacen pelear con quien está a tu lado para que no mires hacia arriba. (Próximamente.)',
  },
  {
    nombre: serie5,
    descripcion:
      'La historia de España con una sola regla en cada página: separar el dato del relato. Ni manual escolar ni panfleto nacional —tampoco su reverso—; solo lo que queda cuando se retira el barniz. (Próximamente.)',
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
      '«El que ejecuta le gana al que opina.» Si diriges un negocio de verdad, estás en el lado bueno de este cambio: la fricción que arruina a las grandes consultoras —lo lento, local y sucio de encajar la IA en el mundo real— es tu terreno. Es tu foso. Un manual de campo, no de predicciones, escrito por quien friega y programa a la vez.',
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
      'En una fiebre del oro, la apuesta fiable no es el oro: son los picos y las palas. Este libro parte de un susto real —descubrir que tu fondo «diversificado» es, sin saberlo, una apuesta directa a la IA— y te enseña a leer dónde están el valor y el riesgo. No es consejo de inversión: es el mapa para decidir tú, con la cabeza fría.',
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
      'Dos personas, la misma máquina en el bolsillo. Una se dejó llevar; la otra decidió que hay cosas que no delega. La diferencia no la decide la tecnología: la decides tú. Cuando la máquina lo hace casi todo, lo que solo aporta un humano —criterio, atención, vínculo, sentido— no baja de precio: sube. El cierre de la serie.',
    puntos: [
      'Dónde sube la prima de lo humano y dónde se hunde.',
      'Las capacidades que la máquina no sustituye (todavía).',
      'Cómo protegerlas sin nostalgia ni negacionismo.',
    ],
    amazon: 'https://www.amazon.es/dp/B0HCRCVXGN',
    precios: [{ formato: 'eBook Kindle', precio: '4,99 €' }],
  },

  // ── Serie «Sin humo» (finanzas / negocio / inversión) — próximamente ──
  {
    slug: 'de-cero-a-libre',
    titulo: 'De cero a libre',
    subtitulo: 'Modo manual para construir libertad financiera desde la deuda, sin atajos ni humo',
    serie: serie2,
    numero: 1,
    estado: 'proximamente',
    ancla: true,
    portada: '/portadas/de-cero-a-libre.jpg',
    sinopsis:
      'Este libro no va de trabajar más: va justo de lo contrario. Con un sueldo normal, solo ahorrando, no vas a hacerte libre. El viaje entero cabe en una línea —de cobrar un sueldo, a facturar, a que tu dinero facture por ti— con una sola regla: separar lo que funciona de lo que te venden.',
    puntos: [
      'Los tres escalones del dinero y por qué solo el sueldo no basta.',
      'La brújula: el valor está en el tiempo, no en facturar más.',
      'Sin recetas de talla única: cambia según de dónde partas.',
    ],
  },
  {
    slug: 'el-primer-negocio',
    titulo: 'El primer negocio',
    subtitulo: 'Comprar o montar el negocio que te da tiempo, sin humo',
    serie: serie2,
    numero: 2,
    estado: 'proximamente',
    portada: '/portadas/el-primer-negocio.jpg',
    sinopsis:
      'Salir del sueldo para siempre pasa, para casi todos, por emprender. Pero el buen negocio no es el que más factura: es el que factura y encima te deja tiempo. Un manual de campo para montar —o comprar— tu primer negocio con el criterio del tiempo.',
    puntos: [
      'Por qué muchas veces comprar en marcha gana a montar de cero.',
      'El criterio del tiempo: no confundir facturar con ser libre.',
      'Escrito por quien lo hace con dinero de verdad en juego.',
    ],
  },
  {
    slug: 'que-tu-dinero-trabaje',
    titulo: 'Que tu dinero trabaje',
    subtitulo: 'Invertir sin humo cuando empiezas de cero',
    serie: serie2,
    numero: 3,
    estado: 'proximamente',
    portada: '/portadas/que-tu-dinero-trabaje.jpg',
    sinopsis:
      '¿Nunca has invertido y todo te suena a chino o a estafa? Empieza por lo aburrido y honesto —indexar— y por la verdad que casi nadie te dice: tu fondo «global» quizá está más concentrado de lo que crees. No es consejo de inversión: es aprender a pensar tu dinero.',
    puntos: [
      'Indexar como default honesto, explicado desde cero.',
      'Interés compuesto y largo plazo, sin promesas de doblar tu dinero.',
      'La concentración oculta de tu índice mundial.',
    ],
  },
  {
    slug: 'elegir-sin-humo',
    titulo: 'Elegir sin humo',
    subtitulo: 'Leer cualquier inversión y dirigir tú una parte, con método',
    serie: serie2,
    numero: 4,
    estado: 'proximamente',
    portada: '/portadas/elegir-sin-humo.jpg',
    sinopsis:
      'El nivel 2: cuando indexar ya no te basta y quieres entender qué compras. Cómo leer cualquier activo —acciones, ETF, bonos, cripto, derivados— con método: riesgo primero, dato verificado y punto de invalidez. No es una lista de qué comprar; es la forma de leer el mapa.',
    puntos: [
      'Riesgo primero: saber de antemano en qué te habrías equivocado.',
      'Leer acciones, ETF, bonos, cripto y derivados con el mismo método.',
      'Cazar oportunidades a largo plazo sin comprar la moda ni el pánico.',
    ],
  },
  {
    slug: 'proteger-y-llegar',
    titulo: 'Proteger y llegar',
    subtitulo: 'Cuidar lo que ya tienes y vivir de ello',
    serie: serie2,
    numero: 5,
    estado: 'proximamente',
    portada: '/portadas/proteger-y-llegar.jpg',
    sinopsis:
      'Construir riqueza es media carrera; la otra media —la que casi nadie enseña— es no arruinarte cerca de la meta y aprender a vivir de lo que tienes. Riesgo de secuencia, la regla del 4% y sus límites reales, seguros, inflación en la meta y legado. El cierre de la serie.',
    puntos: [
      'Riesgo de secuencia: por qué el orden de los años malos importa.',
      'La regla del 4% y sus límites, sin la parte bonita solo.',
      'Vivir de tus inversiones sin arruinarte cerca del final.',
    ],
  },

  // ── Serie «Desclasificados» (OVNIs, secretos de Estado, grandes misterios) — próximamente ──
  {
    slug: 'no-identificado',
    titulo: 'No identificado',
    subtitulo: 'Modo manual para leer los OVNIs y los secretos de Estado sin que te tomen el pelo',
    serie: serie3,
    numero: 1,
    estado: 'proximamente',
    ancla: true,
    portada: '/portadas/no-identificado.jpg',
    sinopsis:
      'Hay dos maneras fáciles de hablar de OVNIs y secretos de Estado: creértelo todo o no creerte nada. Las dos venden lo mismo, una emoción para que dejes de pensar. Este libro coge el tema más lleno de humo que existe y te enseña a leerlo tú mismo, caso a caso, separando lo que se sabe de lo que se supone. Spoiler honesto: sí hay un misterio real y sí ocultan cosas graves, pero no lo que te venden.',
    puntos: [
      'Setenta años, el mismo resultado: cambia el nombre (de OVNI a UAP) pero nunca el patrón.',
      'El caso Tic-Tac y el vídeo viral: cómo distinguir el residuo real del artefacto de un sensor.',
      'Sí ocultan, y a veces es monstruoso —MKUltra, Northwoods—, pero es humano, no cósmico.',
    ],
  },
  {
    slug: 'nombre-en-clave',
    titulo: 'Nombre en clave',
    subtitulo: 'Modo manual para leer los secretos de Estado sin que te tomen el pelo',
    serie: serie3,
    numero: 2,
    estado: 'proximamente',
    portada: '/portadas/nombre-en-clave.jpg',
    sinopsis:
      'El expediente real da más miedo que la conspiración inventada, y a la vez más tranquilidad, porque acabó saliendo. Este libro baja del cielo a la tierra y recorre el archivo desclasificado de verdad: los programas que el Estado sí ocultó, por qué lo hizo y cómo terminaron destapándose. De MKUltra a la vigilancia masiva, cada expediente te afina un detector de humo que sirve para cualquier conspiración, no solo la de platillos.',
    puntos: [
      '«Lo planearon» no es «lo hacen siempre»: Northwoods se aprobó… y Kennedy lo paró.',
      'MKUltra, Tuskegee, COINTELPRO: el crimen documentado que no necesita aliens para horrorizar.',
      'Ningún secreto de miles de personas es eterno: tiene fecha de caducidad, no candado.',
    ],
  },
  {
    slug: 'caso-cerrado',
    titulo: 'Caso cerrado',
    subtitulo: 'Modo manual para leer los grandes misterios sin que te tomen el pelo',
    serie: serie3,
    numero: 3,
    estado: 'proximamente',
    portada: '/portadas/caso-cerrado.jpg',
    sinopsis:
      'Todos tenemos un misterio favorito: Roswell, la llegada a la Luna, el Triángulo de las Bermudas, JFK, Bob Lazar. Este libro no viene a quitártelo ni a confirmártelo: viene a enseñarte a leerlo. Un caso por capítulo, cada uno elegido por la regla que mejor enseña, separando lo documentado de lo supuesto hasta dar un veredicto. Sales con criterio propio para el próximo enigma que te cuenten.',
    puntos: [
      '«No identificado» no es «inexplicable»: cómo la estadística deshace el Triángulo de las Bermudas.',
      'Cómo sabemos que la Luna no fue un plató, y cómo se detecta un documento falso.',
      'Cuando un caso aguanta el escrutinio, se dice sin rebajarlo; cuando se cae, sin reírse de nadie.',
    ],
  },

  // ── Serie «Sin banderas» (temas sociopolíticos con datos, sin bando) — próximamente ──
  {
    slug: 'inmigracion-sin-banderas',
    titulo: 'Inmigración sin banderas',
    subtitulo: 'Quién gana con que odies (o idealices) al de al lado',
    serie: serie4,
    numero: 1,
    estado: 'proximamente',
    ancla: true,
    portada: '/portadas/inmigracion-sin-banderas.jpg',
    sinopsis:
      'Saca el tema de la inmigración en una comida familiar y cronometra cuánto tarda en calentarse: segundos. Esa facilidad para hervir no es un accidente; arde lo que a alguien le conviene que arda. Este libro no viene a decirte que la inmigración es buena ni mala —esa pregunta ya es el anzuelo—: va tema por tema, de los salarios a la vivienda, separando el dato del bulo con la misma vara para los que exageran y para los que niegan. Muerde el dato, no el anzuelo.',
    puntos: [
      'Dos mentiras enfrentadas y una verdad tranquila en medio: el patrón que se repite en cada tema.',
      '¿Bajan los salarios, aportan o cuestan, delinquen más? Los números reales de España, con año y fuente.',
      'Te hacen pelear con quien está a tu lado para que no mires hacia arriba.',
    ],
  },
  {
    slug: 'choque-de-civilizaciones',
    titulo: 'El choque de civilizaciones',
    subtitulo: 'La guerra que nadie está librando',
    serie: serie4,
    numero: 2,
    estado: 'proximamente',
    portada: '/portadas/choque-de-civilizaciones.jpg',
    sinopsis:
      'Llevas toda la vida oyendo que Occidente y el islam están en guerra de siglos, y que solo puede acabar de una manera: ellos o nosotros. Esa historia tiene hasta nombre académico —el choque de civilizaciones— y es, en gran parte, un producto: tiene quien lo fabrica, quien lo vende y quien se lo lleva. Este libro coge las piezas con las que se construye el miedo al islam —demografía, terrorismo, el velo, los barrios— y las mira una a una con la única herramienta que desactiva un relato: el dato con su fuente. Incómodo por los dos lados, a propósito.',
    puntos: [
      'El «gran reemplazo»: una invasión del 5% de la población, contada como profecía.',
      'Las no-go zones y el velo: separar la fricción real de valores del bulo que la infla.',
      'La palanca es el contexto, no la fe: lo que radicaliza o integra casi nunca es lo que la gente reza.',
    ],
  },
  {
    slug: 'guerra-de-sexos',
    titulo: 'La guerra de sexos',
    subtitulo: 'Quién gana con que hombres y mujeres se declaren la guerra',
    serie: serie4,
    numero: 3,
    estado: 'proximamente',
    portada: '/portadas/guerra-de-sexos.jpg',
    sinopsis:
      'La guerra de sexos se libra en sitios muy pequeños: una cocina a las diez de la noche, un grupo de WhatsApp del trabajo, la habitación de un adolescente con el móvil en la mano. Y tiene una particularidad: el enemigo que te asignan es tu pareja, tu madre, tu hijo. Este libro va de quién gana con que hombres y mujeres —que se enamoran, crían y trabajan juntos— se convenzan de que son adversarios, desmontando los bulos de los dos lados con la misma vara. Con una línea roja innegociable: la violencia machista es real, grave y desigual, y no entra en ninguna balanza.',
    puntos: [
      '¿De qué cifra hablamos? Una brecha salarial que es del 16% o del 9% según cómo la midas.',
      'El bulo de las denuncias falsas masivas frente al dato oficial: son ínfimas.',
      'La misma vara para los bulos de los dos lados; nunca para un daño real y asimétrico.',
    ],
  },

  // ── Serie «Historia sin mitos» (historia de España, separar el dato del relato) — próximamente ──
  {
    slug: 'al-andalus',
    titulo: 'Al-Ándalus sin mitos',
    subtitulo: 'Ni paraíso de tolerancia ni pura ocupación: ocho siglos, separando el dato del relato',
    serie: serie5,
    numero: 1,
    estado: 'proximamente',
    ancla: true,
    portada: '/portadas/al-andalus.jpg',
    sinopsis:
      'Para unos, Al-Ándalus fue un paraíso de tolerancia del que Europa lo aprendió todo; para otros, ocho siglos de ocupación que lamentar. Las dos versiones circulan con la seguridad de quien no ha mirado las fuentes. Este libro recorre el arco completo, de 711 a 1492, desinflando la leyenda sin empequeñecer el hecho. No saldrás con munición para una discusión de sobremesa: saldrás sabiendo leer cualquier historia que te llegue demasiado redonda.',
    puntos: [
      'El millón de habitantes de Córdoba que nadie contó: desinflar la cifra sin empequeñecer la ciudad.',
      'La convivencia de las tres culturas, sin la postal ni el panfleto: qué significaba de verdad.',
      'El Cid, un héroe que también sirvió al enemigo: la frontera como mezcla, no como muro.',
    ],
  },
];

export const anclaSlug = libros.find((l) => l.ancla)?.slug ?? 'modo-manual';
