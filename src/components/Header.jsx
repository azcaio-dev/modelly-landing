import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { WhatsAppIcon } from './icons.jsx'
import { whatsappUrl } from '../data/site.js'
import './Header.css'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('inicio')

  // Header fica transparente sobre o Hero e ganha fundo ao rolar.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca no menu a seção que está na tela.
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.href.slice(1))).filter(
      Boolean,
    )
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Menu mobile: trava a rolagem, fecha com Esc e ao voltar para o desktop.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 961px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${solid || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a
          className="header__brand"
          href="#inicio"
          aria-label="Estofados Modelly – ir para o início"
          onClick={close}
        >
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Principal">
          <ul>
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <a
                  className={`header__link ${active === href.slice(1) ? 'is-active' : ''}`}
                  href={href}
                  aria-current={active === href.slice(1) ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button
            className="header__cta"
            size="sm"
            href={whatsappUrl()}
            icon={<WhatsAppIcon size={18} />}
          >
            Fale Conosco
          </Button>

          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`header__panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Menu mobile">
          <ul>
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <a
                  className={active === href.slice(1) ? 'is-active' : ''}
                  href={href}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          href={whatsappUrl()}
          icon={<WhatsAppIcon size={20} />}
          onClick={close}
        >
          Fale Conosco
        </Button>
      </div>
    </header>
  )
}
