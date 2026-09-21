import ImageSlot from './ImageSlot.jsx'
import Button from './Button.jsx'
import { WhatsAppIcon } from './icons.jsx'
import { IMAGES, whatsappUrl } from '../data/site.js'
import './FinalCTA.css'

// Fundo: coloque a foto em /public/images/cta.jpg (o overlay escuro já está aqui).
export default function FinalCTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true">
        <ImageSlot src={IMAGES.cta} tone="cta" position="center 60%" />
      </div>
      <div className="cta__overlay" aria-hidden="true" />

      <div className="container cta__inner">
        <h2 id="cta-title" className="cta__title">
          Seu estofado do jeito que você sempre sonhou{' '}
          <span className="cta__accent">está aqui.</span>
        </h2>
        <div className="cta__actions">
          <Button href={whatsappUrl()} icon={<WhatsAppIcon size={20} />}>
            Solicite seu orçamento
          </Button>
          <Button
            variant="outline"
            href={whatsappUrl('Olá! Gostaria de falar com a Modelly.')}
            icon={<WhatsAppIcon size={18} />}
          >
            Fale conosco agora
          </Button>
        </div>
      </div>
    </section>
  )
}
