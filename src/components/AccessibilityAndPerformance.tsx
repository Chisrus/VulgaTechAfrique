import { useEffect, useState } from 'react';

const AccessibilityAndPerformance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Performance optimizations
    const optimizePerformance = () => {
      // Lazy load images
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/hero-image.webp'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });
    };

    // Accessibility improvements
    const improveAccessibility = () => {
      // Skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Aller au contenu principal';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content id if not present
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }

      // Enhanced keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });

      // Announce page changes to screen readers
      const announcePageChange = () => {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Page chargée';
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      };

      // Announce on route changes
      window.addEventListener('popstate', announcePageChange);
    };

    // Initialize optimizations
    optimizePerformance();
    improveAccessibility();

    // Show accessibility widget after delay
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const adjustFontSize = (delta: number) => {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    const newSize = Math.max(12, Math.min(20, currentSize + delta));
    root.style.fontSize = `${newSize}px`;
  };

  const toggleHighContrast = () => {
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    document.documentElement.classList.toggle('reduce-motion');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-background border border-border rounded-lg shadow-lg p-4 space-y-3">
        <h3 className="font-semibold text-sm">Accessibilité</h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-16">Texte:</span>
            <button
              onClick={() => adjustFontSize(-1)}
              className="w-8 h-8 rounded bg-muted hover:bg-muted/80 text-xs font-medium"
              aria-label="Réduire la taille du texte"
            >
              A-
            </button>
            <button
              onClick={() => adjustFontSize(1)}
              className="w-8 h-8 rounded bg-muted hover:bg-muted/80 text-xs font-medium"
              aria-label="Augmenter la taille du texte"
            >
              A+
            </button>
          </div>
          
          <button
            onClick={toggleHighContrast}
            className="w-full text-left text-xs px-2 py-1 rounded hover:bg-muted/80"
            aria-label="Basculer le contraste élevé"
          >
            Contraste élevé
          </button>
          
          <button
            onClick={toggleReducedMotion}
            className="w-full text-left text-xs px-2 py-1 rounded hover:bg-muted/80"
            aria-label="Réduire les animations"
          >
            Réduire les animations
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityAndPerformance;
