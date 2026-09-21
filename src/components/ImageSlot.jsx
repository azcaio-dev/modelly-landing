import { useCallback, useState } from 'react'
import './ImageSlot.css'

/**
 * Espaço de imagem com placeholder automático.
 *
 * - Enquanto o arquivo em `src` não existir (ou falhar), aparece um bloco
 *   neutro com trama de capitonê e um ícone discreto da categoria.
 * - Ao colocar o arquivo no caminho correto, a foto aparece sozinha por cima.
 *
 * tone: 'dark' | 'stone' | 'cta'
 */
export default function ImageSlot({
  src,
  alt = '',
  icon: Icon,
  tone = 'dark',
  position,
  eager = false,
  className = '',
}) {
  const [status, setStatus] = useState('loading') // loading | loaded | error

  // Cobre imagens que já estavam em cache antes do React anexar o onLoad.
  const imgRef = useCallback((img) => {
    if (img && img.complete && img.naturalWidth > 0) setStatus('loaded')
  }, [])

  return (
    <div className={`slot slot--${tone} ${className}`} data-status={status}>
      <div className="slot__placeholder" aria-hidden="true">
        {Icon && <Icon strokeWidth={1.1} />}
      </div>
      {src && status !== 'error' && (
        <img
          ref={imgRef}
          className="slot__img"
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={position ? { objectPosition: position } : undefined}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}
