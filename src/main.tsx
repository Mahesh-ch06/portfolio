import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug logging
console.log('🚀 Portfolio app starting...');
console.log('📍 Current URL:', window.location.href);
console.log('📂 Base URL:', import.meta.env.BASE_URL);
console.log('🛣️ Pathname:', window.location.pathname);

// Handle /portfolio path routing
if (window.location.pathname.startsWith('/portfolio') && window.location.pathname !== '/portfolio') {
  // Remove /portfolio prefix for internal routing
  const newPath = window.location.pathname.replace('/portfolio', '') || '/';
  console.log('🔄 Rewriting path from', window.location.pathname, 'to', newPath);
  window.history.replaceState({}, '', newPath + window.location.search + window.location.hash);
}

const rootElement = document.getElementById('root');
console.log('📋 Root element found:', !!rootElement);

if (!rootElement) {
  console.error('❌ Root element not found!');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('✅ App rendered successfully');
}
