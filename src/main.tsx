import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fffde7',
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: 26,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}><App/></ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
