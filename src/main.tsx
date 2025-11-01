import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRestaurant from './AppRestaurant.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRestaurant />
  </StrictMode>,
)
