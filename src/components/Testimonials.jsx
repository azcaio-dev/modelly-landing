import { Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import { IMAGES } from '../data/site.js'
import './Testimonials.css'

// Depoimento provisório: troque o texto e o autor quando tiver os reais.
const TESTIMONIAL = {
  quote:
    'Ficou simplesmente perfeito! O atendimento foi excelente e o resultado superou todas as minhas expectativas.',
  author: 'Cliente satisfeito',
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section section--dark testimonials">
      <div className="container testimonials__inner">
        <figure className="testimonials__quote">
          <p className="eyebrow">Depoimentos</p>
          <blockquote>“{TESTIMONIAL.quote}”</blockquote>
          <figcaption>— {TESTIMONIAL.author}</figcaption>
        </figure>

        <ul className="testimonials__photos">
          {IMAGES.testimonials.map((src, i) => (
            <li key={src}>
              <ImageSlot
                src={src}
                alt={`Trabalho entregue a cliente, foto ${i + 1}`}
                icon={Sofa}
                tone="dark"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
