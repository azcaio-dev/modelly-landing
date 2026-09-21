import './Button.css'

// variant: 'green' | 'outline' | 'dark'
export default function Button({
  href,
  variant = 'green',
  icon,
  iconAfter,
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const external = /^https?:/.test(href || '')
  return (
    <a
      className={`btn btn--${variant} btn--${size} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {iconAfter}
    </a>
  )
}
