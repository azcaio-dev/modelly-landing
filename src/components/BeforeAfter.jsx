import { ArrowDown, Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import { WhatsAppIcon } from './icons.jsx'
import { IMAGES, whatsappUrl } from '../data/site.js'
import './BeforeAfter.css'

export default function BeforeAfter() {
  return (
    <section className="section section--dark ba">
      <div className="container ba__inner">
        <div className="ba__media">
          <figure className="ba__fig">
            <ImageSlot
              src={IMAGES.before}
              alt="Estofado antes da reforma"
              icon={Sofa}
              tone="dark"
            />
            <figcaption className="ba__tag ba__tag--before">Antes</figcaption>
          </figure>

          <figure className="ba__fig">
            <ImageSlot
              src={IMAGES.after}
              alt="Estofado depois da reforma"
              icon={Sofa}
              tone="dark"
            />
            <figcaption className="ba__tag ba__tag--after">Depois</figcaption>
          </figure>

          {/* seta curva no desktop, seta para baixo no mobile */}
          <svg className="ba__arrow" viewBox="0 0 96 48" fill="none" aria-hidden="true">
            <path
              d="M3 6C22 32 52 40 88 30M88 30L74 20M88 30L76 42"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ba__chip" aria-hidden="true">
            <ArrowDown size={20} />
          </span>
        </div>

        <div className="ba__text">
          <p className="eyebrow">Transforme o seu estofado</p>
          <h2 className="section-title">
            Reforma que renova, qualidade que permanece.
          </h2>
          <p className="ba__desc">
            Seja para recuperar aquele sofá que você já ama ou para dar um novo
            estilo ao seu ambiente, nós cuidamos de tudo com atenção aos
            detalhes.
          </p>
          <Button
            variant="outline"
            href={whatsappUrl('Olá! Gostaria de um orçamento de reforma de estofado.')}
            icon={<WhatsAppIcon size={18} />}
          >
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  )
}
