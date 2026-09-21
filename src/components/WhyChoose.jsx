import { Heart, Palette, ShieldCheck, Star } from 'lucide-react'
import './WhyChoose.css'

const ITEMS = [
  {
    icon: Star,
    title: 'Experiência e tradição',
    text: 'Anos de mercado e muitos clientes satisfeitos.',
  },
  {
    icon: ShieldCheck,
    title: 'Materiais de primeira linha',
    text: 'Conforto e resistência em cada detalhe.',
  },
  {
    icon: Palette,
    title: 'Diversas opções',
    text: 'Tecidos e cores para combinar com seu estilo.',
  },
  {
    icon: Heart,
    title: 'Atendimento próximo',
    text: 'Do seu primeiro contato até a entrega.',
  },
]

export default function WhyChoose() {
  return (
    <section id="sobre" className="section section--light why">
      <div className="container why__inner">
        <div className="why__intro">
          <p className="eyebrow">Por que escolher a Modelly?</p>
          <h2 className="section-title">Mais do que estofados, criamos bem-estar.</h2>
        </div>

        <ul className="why__grid">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li className="why__item" key={title}>
              <Icon className="why__icon" strokeWidth={1.2} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
