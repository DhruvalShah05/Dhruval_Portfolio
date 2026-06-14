import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { colors } from './theme.js'

// Inject theme colors from theme.js into document root styling properties
const rootStyle = document.documentElement.style;
rootStyle.setProperty('--color-bg-base', colors.bgBase);
rootStyle.setProperty('--color-surface', colors.surface);
rootStyle.setProperty('--color-border', colors.border);
rootStyle.setProperty('--color-text-primary', colors.textPrimary);
rootStyle.setProperty('--color-text-muted', colors.textMuted);
rootStyle.setProperty('--color-accent', colors.accent);
rootStyle.setProperty('--color-accent-light', colors.accentLight);
rootStyle.setProperty('--color-accent-dark', colors.accentDark);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
