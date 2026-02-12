import { ImageWithFallback } from './figma/ImageWithFallback';
import rippleBg from 'figma:asset/34540bbfd66d9375dbf5a08aad0a9a0d55fea052.png';

export function RippleEffectSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px]">
      {/* Background image - covers entire section */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={rippleBg} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ minHeight: '100%' }}
        />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/30 pointer-events-none"></div>

      {/* Decorative wave pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Multiple wave paths */}
          <path d="M 50 100 Q 100 80 150 100 T 250 100 T 350 100" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 150 Q 100 130 150 150 T 250 150 T 350 150" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M 50 200 Q 100 180 150 200 T 250 200 T 350 200" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 250 Q 100 230 150 250 T 250 250 T 350 250" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 50 300 Q 100 280 150 300 T 250 300 T 350 300" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M 50 350 Q 100 330 150 350 T 250 350 T 350 350" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 400 Q 100 380 150 400 T 250 400 T 350 400" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="relative order-2 md:order-1 w-full min-h-[200px] sm:min-h-[300px]">
            <div className="rounded-2xl overflow-hidden w-full relative">
              {/* Image container - preserves aspect ratio and prevents cropping on mobile */}
              {/* When adding image, use: className="w-full h-auto object-contain" to prevent cropping */}
              <div className="w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-auto flex items-center justify-center bg-transparent">
                {/* Image placeholder - replace with actual image when available */}
                {/* Example usage:
                <ImageWithFallback 
                  src={imageSrc} 
                  alt="Carla Marcos" 
                  className="w-full h-full object-contain"
                />
                */}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 order-1 md:order-2 pb-12 sm:pb-8 md:pb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 font-semibold leading-tight text-white drop-shadow-lg" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
              My Unique Edge
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md">
              I bring a distinctive fusion of health, law and corporate expertise to subconscious transformation, helping my clients achieve their goals in both business and life by bridging high-performance with mental health and emotional well-being.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md">
              My approach is solution-focused, science-backed, and holistic, helping people rapidly overcome challenges like anxiety, depression, insomnia, phobias, OCD, chronic pain, and more.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md">
              I also specialize in peak performance, guiding entrepreneurs, professionals, and creatives to find clarity, make better decisions, and unleash their confidence and creativity, whether in the boardroom, on stage, or on the field.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md">
              My integrative approach, which always considers the mind-body connection, also helps my clients reconnect with themselves, discover their purpose, and support their rejuvenation goals, promoting better longevity through a happier, healthier life.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-5 font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em' }}>
                My mantra:
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic leading-relaxed font-bold drop-shadow-lg" style={{ 
                background: 'linear-gradient(to right, #93c5fd, #c4b5fd, #f9a8d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                "You're not stuck, you're just wired that way. The good news is: your brain can be rewired."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}