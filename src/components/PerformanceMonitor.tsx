import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  loadTime: number;
  memoryUsage?: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    loadTime: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let fpsInterval: NodeJS.Timeout;

    // Monitor FPS
    const updateFPS = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(updateFPS);
    };

    // Get initial metrics
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.loadEventStart : 0;
    
    setMetrics(prev => ({
      ...prev,
      loadTime: Math.round(loadTime),
      renderTime: Math.round(performance.now()),
    }));

    // Start FPS monitoring
    requestAnimationFrame(updateFPS);

    // Memory monitoring (if available)
    if ('memory' in performance) {
      const updateMemory = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      };
      
      fpsInterval = setInterval(updateMemory, 1000);
    }

    return () => {
      if (fpsInterval) clearInterval(fpsInterval);
    };
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) return null;

  const getPerformanceColor = (value: number, type: 'fps' | 'memory' | 'load') => {
    switch (type) {
      case 'fps':
        if (value >= 55) return 'text-green-500';
        if (value >= 30) return 'text-yellow-500';
        return 'text-red-500';
      case 'memory':
        if (value <= 50) return 'text-green-500';
        if (value <= 100) return 'text-yellow-500';
        return 'text-red-500';
      case 'load':
        if (value <= 1000) return 'text-green-500';
        if (value <= 3000) return 'text-yellow-500';
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg font-mono text-xs backdrop-blur-sm">
      <div className="mb-2 text-center font-semibold">Performance Monitor</div>
      <div className="space-y-1">
        <div className={`flex justify-between ${getPerformanceColor(metrics.fps, 'fps')}`}>
          <span>FPS:</span>
          <span>{metrics.fps}</span>
        </div>
        <div className={`flex justify-between ${getPerformanceColor(metrics.loadTime, 'load')}`}>
          <span>Load:</span>
          <span>{metrics.loadTime}ms</span>
        </div>
        <div className="flex justify-between text-blue-400">
          <span>Render:</span>
          <span>{metrics.renderTime}ms</span>
        </div>
        {metrics.memoryUsage && (
          <div className={`flex justify-between ${getPerformanceColor(metrics.memoryUsage, 'memory')}`}>
            <span>Memory:</span>
            <span>{metrics.memoryUsage}MB</span>
          </div>
        )}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
