import { ExternalLink, Sofa, Star } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import { IMAGES } from '../data/site.js'
import './Testimonials.css'

// Link da empresa no Google Maps (onde ficam todas as avaliações).
const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Estofados+Modelly+Reforma+de+Sof%C3%A1/@-7.9988272,-34.8584392,17z/data=!4m8!3m7!1s0x7ab3d515c87324f:0x6959569c1f05b77f!8m2!3d-7.9988272!4d-34.8558643!9m1!1b1!16s%2Fg%2F11b6j01222?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D'

// Uma única avaliação em destaque. Troque o texto/autor quando quiser.
const TESTIMONIAL = {
  quote:
    'Excelente atendimento, qualidade do serviço perfeita, pontualidade na entrega. Amei meu sofá! Super indico',
  author: 'Rachel Oliveira, Cliente Modelly.',
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section section--dark testimonials">
      <div className="container testimonials__inner">
        <figure className="testimonials__quote">
          <p className="eyebrow">Depoimentos</p>
          <div
            role="img"
            aria-label="Avaliação 5 de 5 estrelas"
            style={{ display: 'flex', gap: '0.2rem', marginTop: '1.1rem', color: '#f5b301' }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
          </div>
          <blockquote style={{ marginTop: '0.9rem' }}>“{TESTIMONIAL.quote}”</blockquote>
          <figcaption>— {TESTIMONIAL.author}</figcaption>
          <Button
            variant="outline"
            size="sm"
            href={GOOGLE_MAPS_URL}
            iconAfter={<ExternalLink size={15} />}
            style={{ marginTop: '1.6rem' }}
          >
            Ver avaliações no Google
          </Button>
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