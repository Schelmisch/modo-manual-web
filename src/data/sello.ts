// Datos del sello. Fuente única para cabecera, pie y metadatos.
export const sello = {
  nombre: 'Modo manual',
  lema: 'Sin humo.',
  descripcion:
    'No ficción que trata al lector como adulto: datos, método y honestidad. Cero gurús, cero postureo, cero relleno.',
  autor: 'David Amigo',
  url: 'https://librosmodomanual.com',
  email: 'hola@librosmodomanual.com',
  redes: {
    x: '', // p.ej. 'https://x.com/tuusuario'
    youtube: '',
    linkedin: '',
  },
} as const;

// ── Analítica ───────────────────────────────────────────────────────────────
// Cloudflare Web Analytics: gratis y sin cookies (no requiere banner de consentimiento).
// El dominio va «Solo DNS» (proxy OFF), así que se instala vía beacon JS con un token.
// Sácalo en Cloudflare → Analytics & Logs → Web Analytics → tu sitio → «Manage site»
// (aparece en el snippet como data-cf-beacon='{"token":"XXXX"}'). Mientras esté vacío,
// no se carga ningún script.
export const analytics = {
  cloudflareToken: '1c368ba29f924b7fb32ec2ab74578cf9', // Cloudflare Web Analytics (beacon)
} as const;

// ── Amazon Afiliados ─────────────────────────────────────────────────────────
// Tag de Amazon Afiliados (Amazon.es), formato 'algo-21'. Al rellenarlo, todos
// los enlaces de compra añaden ?tag=... (comisión + atribución real de ventas)
// y se muestra la nota de afiliado obligatoria en el pie. Vacío = enlaces
// normales de Amazon, sin nota. Se saca en https://afiliados.amazon.es
// (Panel → Herramientas / tu ID de rastreo).
export const afiliados = {
  amazonTag: '', // p.ej. 'modomanual-21'
} as const;

// ── MailerLite ──────────────────────────────────────────────────────────────
// Rellena estos 2 valores desde tu cuenta de MailerLite y el formulario de la
// web quedará conectado (ver la guía: /Ventas/03 - Canales/MailerLite — montaje.md).
//  - accountId:  Integraciones → Formularios embebidos (aparece en el snippet como ml('account','XXXXXX'))
//  - embedFormId: el id del formulario embebido que crees (data-form="XXXXXX")
// Mientras estén vacíos, la web muestra un formulario de muestra con aviso.
export const mailerlite = {
  accountId: '2553830',      // cuenta MailerLite de David
  embedFormId: 'q80X1k',     // formulario «Web — El detector de humo» → grupo «El cambio que viene»
  pdfUrl: '/detector-de-humo.pdf', // imán hospedado en la propia web
  // Segundo imán: serie «Sin humo» (finanzas) → grupo «Sin humo».
  // Cuando crees el formulario embebido en MailerLite (grupo «Sin humo»),
  // pega aquí su data-form y la landing /finanzas capturará de verdad.
  embedFormIdSinHumo: 'dRrIMd', // formulario «Web — Los 3 escalones del dinero» → grupo «Sin humo» (doble opt-in ON)
  pdfUrlSinHumo: '/tres-escalones-del-dinero.pdf',
} as const;

export const mailerliteReady = Boolean(mailerlite.accountId && mailerlite.embedFormId);

