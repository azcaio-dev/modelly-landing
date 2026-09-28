import { useState } from 'react'
import { ArrowRight, Armchair, Bed, BedDouble, Expand, Scissors, Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import Lightbox from './Lightbox.jsx'
import { PRODUCT_CATEGORIES } from '../data/productGallery.js'
import { catalogUrl } from '../data/site.js'
import './Products.css'

const ICONS = {
  sofas: Sofa,
  pufes: Armchair,
  retrateis: BedDouble,
  cabeceiras: Bed,
  reformas: Scissors,
}

export default function Products() {
  const [open, setOpen] = useState(null) // { categoryIndex, photoIndex } | null

  const openGallery = (categoryIndex) => {
    if (PRODUCT_CATEGORIES[categoryIndex].gallery.length === 0) return
    setOpen({ categoryIndex, photoIndex: 0 })
  }

  const nav = (delta) =>
    setOpen((cur) => {
      if (!cur) return cur
      const { gallery } = PRODUCT_CATEGORIES[cur.categoryIndex]
      const next = (cur.photoIndex + delta + gallery.length) % gallery.length
      return { ...cur, photoIndex: next }
    })

  const active = open ? PRODUCT_CATEGORIES[open.categoryIndex] : null

  return (
    <section id="servicos" className="section section--light products">
      <div className="container products__inner">
        <div className="products__intro">
          <p className="eyebrow">Nossos produtos</p>
          <h2 className="section-title">
            Estofados para todos os ambientes.
          </h2>
          <p className="products__text">
            Sofás, poltronas, puffs, cadeiras, cabeceiras e muito mais. Criamos
            soluções que unem beleza, conforto e durabilidade.
          </p>
          <Button
            variant="dark"
            size="sm"
            href={catalogUrl}
            iconAfter={<ArrowRight size={16} />}
          >
            Ver todos os produtos
          </Button>
        </div>

        <ul className="products__grid">
          {PRODUCT_CATEGORIES.map((category, i) => {
            const hasGallery = category.gallery.length > 0
            const Tag = hasGallery ? 'button' : 'div'
            return (
              <li key={category.key}>
                <Tag
                  type={hasGallery ? 'button' : undefined}
                  className={`product-card ${hasGallery ? '' : 'product-card--empty'}`}
                  onClick={hasGallery ? () => openGallery(i) : undefined}
                  aria-haspopup={hasGallery ? 'dialog' : undefined}
                >
                  <ImageSlot
                    src={category.cover}
                    alt={category.label}
                    icon={ICONS[category.key]}
                    tone="stone"
                  />
                  {hasGallery && (
                    <span className="product-card__hint" aria-hidden="true">
                      <Expand size={15} />
                      Ver fotos
                    </span>
                  )}
                  <span className="product-card__label">{category.label}</span>
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>

      {active && (
        <Lightbox
          title={active.label}
          photos={active.gallery}
          index={open.photoIndex}
          onNav={nav}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}