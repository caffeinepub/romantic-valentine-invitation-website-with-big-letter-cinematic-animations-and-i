import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, RotateCcw, PartyPopper } from 'lucide-react';

interface ProposalSceneProps {
  onReset: () => void;
}

export default function ProposalScene({ onReset }: ProposalSceneProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [response, setResponse] = useState<'pending' | 'yes' | 'thinking'>('pending');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setResponse('yes');
    setTimeout(() => setShowFeedback(true), 300);
  };

  const handleThinking = () => {
    setResponse('thinking');
    setTimeout(() => setShowFeedback(true), 300);
  };

  if (response === 'yes' && showFeedback) {
    return (
      <div
        className={`proposal-scene transition-all duration-1000 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="proposal-content proposal-success">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <PartyPopper className="h-32 w-32 text-romantic-heart animate-heartbeat-celebration" />
              <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-romantic-sparkle animate-sparkle-1" />
              <Sparkles className="absolute -bottom-4 -left-4 h-12 w-12 text-romantic-sparkle animate-sparkle-2" />
              <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-romantic-heart fill-romantic-heart animate-heartbeat" />
            </div>
          </div>

          <h1 className="proposal-title mb-8">She Said YES! 💍✨</h1>

          <div className="proposal-message space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-romantic-text">
              This is the happiest moment of my life!
            </p>
            <p className="text-xl md:text-2xl text-romantic-text/90">
              You've just made all my dreams come true. I promise to love you, cherish you, and make you smile every single day.
            </p>
            <p className="text-xl md:text-2xl text-romantic-text/90">
              Here's to forever together, my love. Our greatest adventure begins now! 🌟
            </p>
            <div className="mt-8 text-6xl animate-gentle-bounce">
              💕 💍 💕
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              onClick={onReset}
              variant="outline"
              size="lg"
              className="proposal-reset-button group"
            >
              <RotateCcw className="mr-2 h-5 w-5 transition-transform group-hover:rotate-180" />
              Relive This Moment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (response === 'thinking' && showFeedback) {
    return (
      <div
        className={`proposal-scene transition-all duration-1000 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="proposal-content">
          <div className="mb-8 flex justify-center">
            <Heart className="h-32 w-32 text-romantic-heart/70 animate-gentle-bounce" />
          </div>

          <h1 className="proposal-title mb-8">Take All the Time You Need 💭</h1>

          <div className="proposal-message space-y-6">
            <p className="text-xl md:text-2xl text-romantic-text">
              I understand this is a big question, and I want you to be absolutely sure.
            </p>
            <p className="text-lg md:text-xl text-romantic-text/90">
              My love for you is patient and unwavering. Whenever you're ready, I'll be here with open arms and an open heart.
            </p>
            <p className="text-lg md:text-xl text-romantic-text/90">
              No matter what, you mean the world to me. 🌹
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              onClick={onReset}
              size="lg"
              className="proposal-reset-button-primary group"
            >
              <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" />
              Start Over
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`proposal-scene transition-all duration-1000 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      <div className="proposal-content">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Heart className="h-32 w-32 text-romantic-heart fill-romantic-heart animate-heartbeat" />
            <Sparkles className="absolute -top-4 -right-4 h-10 w-10 text-romantic-sparkle animate-sparkle-1" />
            <Sparkles className="absolute -bottom-4 -left-4 h-10 w-10 text-romantic-sparkle animate-sparkle-2" />
          </div>
        </div>

        <h1 className="proposal-title mb-8">Will You Marry Me? 💍</h1>

        <div className="proposal-message space-y-6 mb-12">
          <p className="text-xl md:text-2xl font-medium text-romantic-text">
            After all the moments we've shared, all the memories we've created, and all the love that fills my heart...
          </p>
          <p className="text-xl md:text-2xl font-medium text-romantic-text">
            I want to spend the rest of my life making you happy.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-romantic-text mt-8">
            Will you be my forever? ✨
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            onClick={handleYes}
            size="lg"
            className="proposal-button-yes group min-w-[200px]"
          >
            <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" />
            Yes, I Will! 💕
          </Button>

          <Button
            onClick={handleThinking}
            variant="outline"
            size="lg"
            className="proposal-button-thinking group min-w-[200px]"
          >
            <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            I Need Time 💭
          </Button>
        </div>
      </div>
    </div>
  );
}
