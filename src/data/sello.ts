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
} as const;

export const mailerliteReady = Boolean(mailerlite.accountId && mailerlite.embedFormId);

