import { Button } from '@/components/ui/button';
import { Heart, Sparkles, RotateCcw, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OutcomeSceneProps {
  type: 'yes' | 'no';
  onReset: () => void;
  onContinue?: () => void;
}

export default function OutcomeScene({ type, onReset, onContinue }: OutcomeSceneProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (type === 'yes') {
    return (
      <div
        className={`outcome-scene outcome-yes transition-all duration-1000 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="outcome-content">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Heart className="h-24 w-24 text-romantic-heart fill-romantic-heart animate-heartbeat-celebration" />
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-romantic-sparkle animate-sparkle-1" />
              <Sparkles className="absolute -bottom-2 -left-2 h-8 w-8 text-romantic-sparkle animate-sparkle-2" />
            </div>
          </div>

          <h1 className="outcome-title mb-6">You said YES! 🎉</h1>

          <div className="outcome-message space-y-4">
            <p className="text-xl md:text-2xl font-medium text-romantic-text">
              You've just made me the happiest person alive!
            </p>
            <p className="text-lg md:text-xl text-romantic-text/90">
              I promise to cherish every moment we share together.
            </p>
            <p className="text-lg md:text-xl text-romantic-text/90">
              This Valentine's Day is just the beginning of our beautiful journey. ✨
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {onContinue && (
              <Button
                onClick={onContinue}
                size="lg"
                className="outcome-continue-button group min-w-[200px]"
              >
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Continue
              </Button>
            )}
            <Button
              onClick={onReset}
              variant="outline"
              size="lg"
              className="outcome-reset-button group min-w-[200px]"
            >
              <RotateCcw className="mr-2 h-5 w-5 transition-transform group-hover:rotate-180" />
              Read Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`outcome-scene outcome-no transition-all duration-1000 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      <div className="outcome-content">
        <div className="mb-6 flex justify-center">
          <Heart className="h-24 w-24 text-romantic-heart/60 animate-gentle-bounce" />
        </div>

        <h1 className="outcome-title mb-6">That's okay... 💭</h1>

        <div className="outcome-message space-y-4">
          <p className="text-xl md:text-2xl font-medium text-romantic-text">
            I understand if you need more time.
          </p>
          <p className="text-lg md:text-xl text-romantic-text/90">
            My feelings won't change, and I'll be here waiting with an open heart.
          </p>
          <p className="text-lg md:text-xl text-romantic-text/90">
            Maybe you'll feel differently when you read it again? 🌹
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={onReset}
            size="lg"
            className="outcome-reset-button-primary group"
          >
            <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" />
            Read the Letter Again
          </Button>
        </div>
      </div>
    </div>
  );
}
