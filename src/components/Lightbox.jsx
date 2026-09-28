import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './Lightbox.css'

export default function Lightbox({ title, photos, index, onClose, onNav }) {
  const touchX = useRef(null)
  const dialogRef = useRef(null)
  const total = photos.length
  const canNav = total > 1

  // Esc fecha, setas navegam; trava o scroll da página enquanto está aberta.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (canNav && e.key === 'ArrowRight') onNav(1)
      if (canNav && e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onNav, canNav])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (canNav && Math.abs(delta) > 45) onNav(delta < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotos — ${title}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="lightbox__panel"
        ref={dialogRef}
        tabIndex={-1}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <header className="lightbox__bar">
          <span className="lightbox__title">{title}</span>
          {total > 0 && (
            <span className="lightbox__count">
              {index + 1} / {total}
            </span>
          )}
          <button
            type="button"
            className="lightbox__close"
            onClick={onClose}
            aria-label="Fechar galeria"
          >
            <X size={22} />
          </button>
        </header>

        <div className="lightbox__stage">
          {canNav && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => onNav(-1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <img
            key={photos[index]}
            className="lightbox__img"
            src={photos[index]}
            alt={`${title} — foto ${index + 1} de ${total}`}
          />

          {canNav && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => onNav(1)}
              aria-label="Próxima foto"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>

        {canNav && (
          <ul className="lightbox__dots">
            {photos.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  className={i === index ? 'is-active' : ''}
                  aria-label={`Ir para a foto ${i + 1}`}
                  onClick={() => onNav(i - index)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}