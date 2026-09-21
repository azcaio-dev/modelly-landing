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

// Botão "Ver todos os produtos".
// Provisório: abre a conversa com a mensagem pedindo o catálogo.
// Quando o link oficial do catálogo funcionar, troque pelo link copiado do
// app WhatsApp Business (Ferramentas comerciais > Catálogo > Compartilhar):
// export const catalogUrl = 'COLE_O_LINK_AQUI'
export const catalogUrl = whatsappUrl(
  'Olá! Gostaria de ver o catálogo de produtos.',
)

export const instagramUrl = `https://instagram.com/${SITE.instagram}`

// Caminhos das imagens (a partir de /public). Basta colocar os arquivos aqui.
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero.png',
  cta: '/images/cta.jpg',
  products: {
    sofas: '/images/produtos/sofas.jpg',
    pufes: '/images/produtos/pufes.jpg',
    retrateis: '/images/produtos/retrateis.jpg',
    reformas: '/images/produtos/reformas.jpg',
  },
  before: '/images/antes-depois/antes.jpg',
  after: '/images/antes-depois/depois.jpg',
  portfolio: [1, 2, 3, 4, 5, 6].map(
    (n) => `/images/portfolio/${String(n).padStart(2, '0')}.jpg`,
  ),
  testimonials: [1, 2, 3].map(
    (n) => `/images/depoimentos/${String(n).padStart(2, '0')}.jpg`,
  ),
}