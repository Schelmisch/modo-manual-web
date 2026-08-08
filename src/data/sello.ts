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

