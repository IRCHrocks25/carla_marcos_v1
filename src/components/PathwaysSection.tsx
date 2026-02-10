import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import cosmicBg from 'figma:asset/dc579cb109d5ff52beaed21cf0bc2255c33217c1.png';

export function PathwaysSection() {
  const [expandedStage, setExpandedStage] = useState(0);

  const stages = [
    {
      title: "STAGE 1: REGULATION",
      subtitle: "When Your Nervous System Finally Feels Safe",
      content: [
        "Your body has been braced for impact for so long, it's forgotten what calm feels like. We start by teaching your nervous system that it's safe to let go of hypervigilance.",
        "What happens: Sleep improves. Racing thoughts slow down. Your shoulders drop for the first time in months. You remember what it feels like to breathe deeply."
      ]
    },
    {
      title: "STAGE 2: REWIRING",
      subtitle: "Where the Magic Actually Happens",
      content: [
        "This is where we access and update the subconscious beliefs driving your patterns.",
        "We rewrite the old stories that no longer serve you, installing new neural pathways that support your goals and well-being."
      ]
    },
    {
      title: "STAGE 3: REALISATION",
      subtitle: "When Change Becomes Your New Normal",
      content: [
        "You start showing up differently without even thinking about it.",
        "The changes become integrated into who you are, not something you have to consciously maintain."
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-visible min-h-[100vh] sm:min-h-[900px]">
      {/* Background image - keep full size on all screens, especially mobile */}
      <div className="absolute inset-0">
        <img 
          src={cosmicBg} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* Decorative wave pattern on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 opacity-10 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${i * 60} Q 50 ${i * 60 - 20} 100 ${i * 60} T 200 ${i * 60}`}
              stroke="url(#waveLeft)"
              strokeWidth="2"
              fill="none"
              opacity={0.3 + (i % 3) * 0.1}
            />
          ))}
        </svg>
      </div>

      {/* Decorative dots/particles */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Program Info */}
          <div className="text-white space-y-5 sm:space-y-6 md:space-y-7 pb-8 sm:pb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight font-bold md:whitespace-nowrap text-white drop-shadow-lg">
              The Diamond Transformation Program®
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-200 sm:text-purple-300 mb-5 sm:mb-6 md:mb-7 font-bold drop-shadow-md">
              How to Rewire a Lifetime in Weeks, Not Years
            </h3>
            
            <div className="space-y-4 sm:space-y-5">
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm">
                Forget everything you've been told about change taking time.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm">
                Forget the idea that growth has to be painful.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm">
                And definitely forget the belief that you need to dig through every childhood wound to move forward.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm">
                The Marcos Method™ is different. It's based on a simple truth: your brain is neuroplastic, which means the patterns running your life can be rewritten, much like updating software.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm">
                After our Initial Consultation, I'll prepare your bespoke plan to help you achieve your specific goals. This will balance planning with expert ad-hoc assessment as our sessions progress.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-sm pb-4 sm:pb-0">
                Often, as we work together, we discover that what first appeared to be "the problem" is actually a coping strategy. That's why I'll naturally overlay and adapt the main stages of your plan to reflect the new insights and breakthroughs you experience along the way.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion Stages */}
          <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setExpandedStage(expandedStage === index ? -1 : index)}
                  className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                >
                  <div className="flex-1 pr-3">
                    <h4 className="text-lg sm:text-xl md:text-2xl text-white mb-2 font-bold drop-shadow-md">
                      {stage.title}
                    </h4>
                    <p className="text-purple-200 sm:text-purple-100 text-sm sm:text-base font-medium drop-shadow-sm">
                      {stage.subtitle}
                    </p>
                  </div>
                  {expandedStage === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  )}
                </button>
                
                {expandedStage === index && (
                  <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 md:pb-7 pt-3 space-y-4 sm:space-y-5">
                    {stage.content.map((paragraph, idx) => (
                      <p key={idx} className="text-white leading-relaxed text-sm sm:text-base md:text-lg font-medium drop-shadow-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-5 md:mb-6 font-bold px-4 leading-tight"
            style={{
              background: 'linear-gradient(to right, #A341FD, #0057EF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            From Survival Mode to Self-Mastery, in Weeks, Not Years
          </h3>
          
          <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 max-w-3xl mx-auto px-4">
            The Diamond Transformation Program™ doesn't just help you cope, it rewires your mind for a life that feels lighter, clearer, and completely your own.
          </p>
          
          <p className="text-purple-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-9 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Start your transformation today and experience the calm, clarity, and confidence you've been craving.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-bold shadow-2xl w-full sm:w-auto mx-4 whitespace-normal"
          >
            <span className="block sm:inline">Book your Initial Consultation</span>
            <span className="block sm:inline sm:ml-1">today</span>
            <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
}