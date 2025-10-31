import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRestaurant from './AppRestaurant.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRestaurant />
  </StrictMode>,
)
