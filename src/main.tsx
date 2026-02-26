import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js" 

const theme = createTheme({
  typography: {
    fontFamily: 'Tiny5, sans-serif',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
