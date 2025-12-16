import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div>Testing</div>
    <p>Testing to check where the loop is stored</p>
  </StrictMode>,
)
