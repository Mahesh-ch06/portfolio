import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load components that are not immediately visible
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  </div>
);

function App() {
  console.log('🎨 App component rendering...');
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Chatbot />
        </Suspense>
        
        {/* Performance Monitor for Development Only */}
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        
        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default React.memo(App);