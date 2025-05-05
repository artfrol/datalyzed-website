import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const baseName =
  import.meta.env.MODE === 'development' || window.location.hostname === 'datalyzed.ru'
    ? '/'
    : '/datalyzed-website';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);