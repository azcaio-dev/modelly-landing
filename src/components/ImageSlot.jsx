import './ImageSlot.css'

/**
 * Componente para exibir imagens com um placeholder de fundo.
 * A imagem fica visível assim que o navegador a renderiza, sem depender
 * de uma classe de estado que possa manter a foto invisível.
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
  return (
    <div className={`slot slot--${tone} ${className}`}>
      <div className="slot__placeholder" aria-hidden="true">
        {Icon && <Icon strokeWidth={1.1} />}
      </div>

      {src && (
        <img
          className="slot__img"
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            ...(position ? { objectPosition: position } : {}),
            opacity: 1,
          }}
        />
      )}
    </div>
  )
}
