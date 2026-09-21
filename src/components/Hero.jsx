import { Play, Sofa } from 'lucide-react'
import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import { WhatsAppIcon } from './icons.jsx'
import { IMAGES, whatsappUrl } from '../data/site.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Imagem do sofá: /public/images/hero.png (sem texto dentro da imagem) */}
      <div className="hero__media">
        <ImageSlot
          src={IMAGES.hero}
          alt="Sofá estofado pela Estofados Modelly"
          icon={Sofa}
          tone="dark"
          position="70% 55%"
          eager
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow" style={{ '--i': 0 }}>
            Reformas e fabricação de estofados
          </p>
          <h1 className="hero__title" style={{ '--i': 1 }}>
            <span>Seu conforto,</span>
            <span className="hero__accent">do seu jeito.</span>
          </h1>
          <p className="hero__text" style={{ '--i': 2 }}>
            <span>Sofás, poltronas, puffs e muito mais.</span> Na Estofados
            Modelly você encontra qualidade, conforto e um atendimento que
            realmente entende o que você precisa.
          </p>
          <div className="hero__actions" style={{ '--i': 3 }}>
            <Button href={whatsappUrl()} icon={<WhatsAppIcon size={20} />}>
              Solicite seu orçamento
            </Button>
            <Button
              variant="outline"
              href="#portfolio"
              icon={<Play size={13} fill="currentColor" />}
            >
              Conheça nosso trabalho
            </Button>
          </div>
        </div>
      </div>

      {/* Frase decorativa em HTML/CSS, nunca dentro da imagem */}
      <p className="hero__quote" aria-hidden="true">
        <span>Estilo e conforto</span>
        <span>em cada detalhe.</span>
        <svg viewBox="0 0 170 14" fill="none">
          <path
            d="M2 11C38 3 104 1 168 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </p>
    </section>
  )
}
