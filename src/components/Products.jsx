import { ArrowRight, Armchair, BedDouble, Scissors, Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import { IMAGES, catalogUrl, whatsappUrl } from '../data/site.js'
import './Products.css'

// Para trocar as fotos, basta colocar os arquivos nos caminhos de IMAGES.products.
const PRODUCTS = [
  { key: 'sofas', label: 'Sofás', icon: Sofa },
  { key: 'pufes', label: 'Pufes', icon: Armchair },
  { key: 'retrateis', label: 'Sofás retráteis', icon: BedDouble },
  { key: 'reformas', label: 'Reformas', icon: Scissors },
]

export default function Products() {
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
          {PRODUCTS.map(({ key, label, icon }) => (
            <li key={key}>
              <a
                className="product-card"
                href={whatsappUrl(`Olá! Gostaria de saber mais sobre: ${label}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageSlot
                  src={IMAGES.products[key]}
                  alt={label}
                  icon={icon}
                  tone="stone"
                />
                <span className="product-card__label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}