import { MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { InstagramIcon, WhatsAppIcon } from './icons.jsx'
import { SITE, instagramUrl, whatsappUrl } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer__top">
        <a className="footer__brand" href="#inicio" aria-label="Voltar ao início">
          <Logo />
        </a>

        <ul className="footer__contacts">
          <li>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={30} className="footer__icon footer__icon--wa" />
              <span>
                <strong>{SITE.whatsappDisplay}</strong>
                <small>Atendimento via WhatsApp</small>
              </span>
            </a>
          </li>
          <li>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={30} className="footer__icon" />
              <span>
                <strong>@{SITE.instagram}</strong>
                <small>Acompanhe nosso trabalho</small>
              </span>
            </a>
          </li>
          <li>
            <div>
              <MapPin size={30} strokeWidth={1.5} className="footer__icon" aria-hidden="true" />
              <span>
                <strong>{SITE.city}</strong>
                <small>Atendimento em toda a região</small>
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="container footer__bottom">
        <p>Estofados Modelly</p>
        <p>Conforto com estilo</p>
        <p>Seu projeto, nossa especialidade.</p>
      </div>
    </footer>
  )
}
