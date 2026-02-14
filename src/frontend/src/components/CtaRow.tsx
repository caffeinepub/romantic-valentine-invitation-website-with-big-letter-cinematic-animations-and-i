import { Button } from '@/components/ui/button';
import { Heart, HeartCrack } from 'lucide-react';

interface CtaRowProps {
  onYes: () => void;
  onNo: () => void;
  isLoaded: boolean;
}

export default function CtaRow({ onYes, onNo, isLoaded }: CtaRowProps) {
  return (
    <div
      className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ animationDelay: '1800ms' }}
    >
      <Button
        onClick={onYes}
        size="lg"
        className="cta-button cta-button-yes group min-w-[160px] sm:min-w-[200px]"
      >
        <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 group-hover:fill-current" />
        Yes, I will! 💕
      </Button>

      <Button
        onClick={onNo}
        variant="outline"
        size="lg"
        className="cta-button cta-button-no group min-w-[160px] sm:min-w-[200px]"
      >
        <HeartCrack className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
        Not yet...
      </Button>
    </div>
  );
}
