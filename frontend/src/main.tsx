import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1>Hola mundo xs</h1>
  </StrictMode>,
)
