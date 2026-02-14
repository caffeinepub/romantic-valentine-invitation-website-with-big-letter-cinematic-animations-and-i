interface LetterCardProps {
  isLoaded: boolean;
}

export default function LetterCard({ isLoaded }: LetterCardProps) {
  const letterLines = [
    'My Dearest Love,',
    '',
    'As I sit here trying to find the perfect words to express what\'s in my heart, I realize that no amount of poetry or prose could truly capture the depth of what I feel for you. But on this Valentine\'s Day, I want to try.',
    '',
    'From the very first moment we met, something inside me knew that you were different. There was a spark, a connection that I had never experienced before. And with each passing day, that spark has grown into a flame that warms my entire being.',
    '',
    'You have this incredible way of making the ordinary feel extraordinary. A simple walk becomes an adventure when I\'m with you. A quiet evening at home feels like the most precious gift. Even the mundane tasks of daily life become moments I treasure, simply because you\'re by my side.',
    '',
    'Your laughter is my favorite sound in the world. It\'s like music that plays on repeat in my mind, bringing a smile to my face even when we\'re apart. The way your eyes light up when you talk about something you\'re passionate about—it\'s mesmerizing. I could listen to you for hours and never grow tired.',
    '',
    'You\'ve taught me so much about love, about patience, about what it means to truly care for another person. You\'ve shown me that love isn\'t just about the grand gestures or the perfect moments. It\'s in the little things—the way you remember how I take my coffee, the gentle squeeze of my hand when you know I\'m nervous, the way you always know exactly what to say when I need comfort.',
    '',
    'I love how you challenge me to be better, to grow, to see the world through new eyes. You inspire me every single day. Your kindness, your strength, your compassion—these qualities make you not just beautiful on the outside, but radiant from within.',
    '',
    'When I think about the future, I see you in every dream, every plan, every hope. I see us building a life together, creating memories, facing challenges hand in hand, and celebrating victories side by side. I see lazy Sunday mornings and exciting adventures. I see comfort and passion, stability and spontaneity, friendship and romance all woven together.',
    '',
    'You are my best friend, my confidant, my partner in crime, and the love of my life. You make me want to be the best version of myself, not because you demand it, but because you deserve it. You deserve someone who will cherish you, support you, make you laugh, and stand by you through everything life throws our way.',
    '',
    'And I want to be that person for you. Today, tomorrow, and for all the days to come.',
    '',
    'So on this day dedicated to love, I find myself with a heart full of hope and a question that means everything to me...',
  ];

  return (
    <div className="letter-card mx-auto max-w-2xl">
      <div className="letter-paper">
        <div className="space-y-4">
          {letterLines.map((line, index) => {
            const isEmpty = line === '';
            const isFirst = index === 0;
            const isQuestion = index === letterLines.length - 1;

            return (
              <p
                key={index}
                className={`letter-line ${isEmpty ? 'h-2' : ''} ${
                  isFirst ? 'letter-greeting' : ''
                } ${isQuestion ? 'letter-question' : ''}`}
                style={{
                  animationDelay: `${800 + index * 150}ms`,
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                {line}
              </p>
            );
          })}

          <h1
            className="letter-main-question"
            style={{
              animationDelay: `${800 + letterLines.length * 150}ms`,
              opacity: isLoaded ? 1 : 0,
            }}
          >
            Will you be my Valentine?
          </h1>
        </div>
      </div>
    </div>
  );
}
