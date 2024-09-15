import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Routes from './routes/Routes.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes></Routes>
  </StrictMode>,
)
