// Dados de contato e caminhos de imagem em um único lugar.
// Troque aqui o número real de WhatsApp e o Instagram.

export const SITE = {
  name: 'Estofados Modelly',
  // Formato internacional, só números: 55 + DDD + número.
  whatsapp: '5581988882957',
  whatsappDisplay: '(81) 9 8888-2957',
  instagram: 'estofadosmodelly',
  city: 'Olinda – PE',
}

export const whatsappUrl = (
  message = 'Olá! Gostaria de solicitar um orçamento.',
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`

// Catálogo do WhatsApp Business (botão "Ver todos os produtos").
export const catalogUrl = 'https://wa.me/c/5581988882957'

export const instagramUrl = `https://instagram.com/${SITE.instagram}`

// Caminhos das imagens (a partir de /public). Basta colocar os arquivos aqui.
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero.png',
  cta: '/images/cta.jpg',
  products: {
    sofas: '/images/produtos/sofas.png',
    pufes: '/images/produtos/puff.png',
    retrateis: '/images/produtos/sofa-retratil.png',
    reformas: '/images/produtos/reforma.png',
  },
  before: '/images/antes-depois/antes.png',
  after: '/images/antes-depois/depois.png',
  portfolio: [1, 2, 3, 4, 5, 6, 7].map(
    (n) => `/images/portfolio/${String(n).padStart(2, '0')}.png`,
  ),
  testimonials: [1, 2, 3].map(
    (n) => `/images/depoimentos/${String(n).padStart(2, '0')}.jpeg`,
  ),
}