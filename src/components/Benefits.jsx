import { Ruler, ShieldCheck, Truck, Wrench } from 'lucide-react'
import './Benefits.css'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Qualidade garantida',
    text: 'Materiais de alta durabilidade e acabamento impecável.',
  },
  {
    icon: Wrench,
    title: 'Reforma especializada',
    text: 'Seu estofado de novo, com todo o cuidado.',
  },
  {
    icon: Ruler,
    title: 'Fabricação sob medida',
    text: 'Do seu jeito, no tamanho e estilo que você quiser.',
  },
  {
    icon: Truck,
    title: 'Atendimento personalizado',
    text: 'Do orçamento à entrega, você fala com quem entende.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Diferenciais">
      <ul className="container benefits__list">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <li className="benefits__item" key={title}>
            <Icon className="benefits__icon" strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
