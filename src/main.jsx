import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Ao recarregar (F5), a página volta ao topo em vez de restaurar a rolagem.
// Links diretos com âncora (ex.: /#portfolio) continuam funcionando.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const navigation = performance.getEntriesByType('navigation')[0]
const isReload = navigation?.type === 'reload'

if (isReload && window.location.hash) {
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search,
  )
}

if (isReload || !window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)