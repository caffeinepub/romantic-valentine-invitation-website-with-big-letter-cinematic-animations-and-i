import { useState } from 'react';
import LetterCard from './LetterCard';
import CtaRow from './CtaRow';
import OutcomeScene from './OutcomeScene';

type Scene = 'initial' | 'yes' | 'no';

export default function ValentineInvitePage() {
  const [scene, setScene] = useState<Scene>('initial');
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations on mount
  useState(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  });

  const handleYes = () => setScene('yes');
  const handleNo = () => setScene('no');
  const handleReset = () => setScene('initial');

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with cinematic overlay */}
      <div
        className={`fixed inset-0 bg-cover bg-center bg-no-repeat ease-out ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          transitionDuration: '2000ms',
          transitionProperty: 'transform, opacity',
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-romantic-overlay/60 via-romantic-overlay/40 to-romantic-overlay/70 backdrop-blur-[2px]" />

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          {scene === 'initial' && (
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Envelope illustration */}
              <div
                className={`mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 transition-all duration-1000 ease-out delay-500 ${
                  isLoaded ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-12'
                }`}
              >
                <img
                  src="/assets/generated/valentine-envelope.dim_900x900.png"
                  alt=""
                  className="w-full h-full object-contain drop-shadow-romantic"
                />
              </div>

              <LetterCard isLoaded={isLoaded} />
              <CtaRow onYes={handleYes} onNo={handleNo} isLoaded={isLoaded} />
            </div>
          )}

          {scene === 'yes' && <OutcomeScene type="yes" onReset={handleReset} />}
          {scene === 'no' && <OutcomeScene type="no" onReset={handleReset} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center">
        <p className="text-sm text-romantic-muted">
          © {new Date().getFullYear()} · Built with{' '}
          <span className="inline-block text-romantic-heart animate-heartbeat">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-link hover:text-romantic-link-hover transition-colors underline decoration-romantic-link/30 hover:decoration-romantic-link-hover"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
