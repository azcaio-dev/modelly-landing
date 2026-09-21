# Estofados Modelly – Landing page

React + Vite. Rodar: `npm install` e `npm run dev`. Build: `npm run build`.

## Imagens (public/images/)
Coloque os arquivos nos caminhos abaixo. Enquanto não existirem, aparece um placeholder; ao adicionar, a foto entra sozinha (sem mexer no código).

- `logo.png`, `hero.png`
- `produtos/` sofas.jpg, pufes.jpg, retrateis.jpg, reformas.jpg
- `antes-depois/` antes.jpg, depois.jpg
- `portfolio/` 01.jpg … 06.jpg
- `depoimentos/` 01.jpg … 03.jpg
- `cta.jpg`

## Edição rápida
- WhatsApp, Instagram e caminhos das imagens: `src/data/site.js`
- Cores e espaçamentos: variáveis em `src/styles/global.css`
- Cada seção tem `Componente.jsx` + `Componente.css` em `src/components/`
- Ajuste do enquadramento do sofá: prop `position` do `ImageSlot` em `Hero.jsx`
