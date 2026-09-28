// Fotos dos produtos, organizadas por categoria.
//
// Para adicionar ou trocar fotos: coloque os arquivos dentro da pasta da
// categoria em src/assets/produtos/<categoria>/ (jpg, jpeg, png ou webp).
// Elas aparecem sozinhas na galeria, na ordem do nome do arquivo (01, 02, 03...).
//
// CAPA DO CARD: é a foto principal da categoria. Vale, nesta ordem:
//   1) um arquivo chamado "capa" (capa.jpg, capa.png...) na pasta da categoria;
//   2) o arquivo indicado em `cover` abaixo (ex.: 'puff.png');
//   3) se nenhum existir, a primeira foto da pasta.
// A capa fica só no card — ela NÃO aparece dentro da galeria, para não repetir
// a mesma foto duas vezes.
//
// Categoria sem nenhuma foto: o card mostra o espaço reservado e não abre
// galeria — ao adicionar a primeira foto, passa a funcionar sozinho.

const modules = import.meta.glob(
  '/src/assets/produtos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const byCategory = {}
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/produtos\/([^/]+)\/([^/]+)$/)
  if (!match) continue
  const [, category, filename] = match
  ;(byCategory[category] ??= []).push({ filename, url })
}
for (const key of Object.keys(byCategory)) {
  byCategory[key].sort((a, b) =>
    a.filename.localeCompare(b.filename, 'pt', { numeric: true }),
  )
}

// Ordem e rótulo dos cards na seção de produtos.
// `cover`: nome do arquivo da foto principal (opcional, ver regra da capa acima).
const CATEGORY_META = [
  { key: 'sofas', label: 'Sofás', cover: 'sofas.png' },
  { key: 'pufes', label: 'Pufes', cover: 'puff.png' },
  { key: 'retrateis', label: 'Sofás retráteis', cover: 'sofa-retratil.png' },
  { key: 'cabeceiras', label: 'Cabeceiras' },
  { key: 'reformas', label: 'Reformas', cover: 'reforma.png' },
]

const isCapa = (filename) => /^capa\.[a-z0-9]+$/i.test(filename)

// Separa a capa (foto principal, usada só no card) do restante das fotos
// (usadas só na galeria). Se nenhuma capa for encontrada, o card usa a
// primeira foto da pasta como capa e ela também sai da galeria.
function splitCover(list, coverName) {
  const idx = list.findIndex(
    (p) =>
      isCapa(p.filename) ||
      (coverName && p.filename.toLowerCase() === coverName.toLowerCase()),
  )
  const coverIdx = idx === -1 ? 0 : idx
  if (list.length === 0) return { cover: null, gallery: [] }
  return {
    cover: list[coverIdx],
    gallery: list.filter((_, i) => i !== coverIdx),
  }
}

export const PRODUCT_CATEGORIES = CATEGORY_META.map((c) => {
  const { cover, gallery } = splitCover(byCategory[c.key] ?? [], c.cover)
  return {
    ...c,
    cover: cover?.url ?? null,
    gallery: gallery.map((p) => p.url),
  }
})