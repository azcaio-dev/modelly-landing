import { useState } from 'react'
import { IMAGES, SITE } from '../data/site.js'

// Usa public/images/logo.png exatamente como está (sem efeitos).
// Se o arquivo ainda não existir, mostra apenas o nome em texto simples.
export default function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span className={`logo-fallback ${className}`}>{SITE.name}</span>
  }

  return (
    <img
      className={`logo ${className}`}
      src={IMAGES.logo}
      alt={`${SITE.name} – Conforto com estilo`}
      onError={() => setFailed(true)}
    />
  )
}
