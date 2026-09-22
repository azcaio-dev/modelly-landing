import { Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import { IMAGES } from '../data/site.js'
import './Portfolio.css'

// Para trocar as fotos, basta colocar os arquivos 01.jpg … 06.jpg em /public/images/portfolio/.
export default function Portfolio() {
  return (
    <section id="portfolio" className="section section--white portfolio">
      <div className="container">
        <header className="portfolio__head">
          <p className="eyebrow">Portfólio</p>
          <h2 className="section-title">
            Alguns trabalhos que já transformaram ambientes.
          </h2>
        </header>

        <ul className="portfolio__grid">
          {IMAGES.portfolio.map((src, i) => (
            <li
              className={`portfolio__item${i === 0 ? ' portfolio__item--wide' : ''}`}
              key={src}
            >
              <ImageSlot
                src={src}
                alt={`Trabalho de estofado realizado pela Modelly, foto ${i + 1}`}
                icon={Sofa}
                tone="stone"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}