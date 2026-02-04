import { ImageWithFallback } from './figma/ImageWithFallback';
import rippleBg from 'figma:asset/34540bbfd66d9375dbf5a08aad0a9a0d55fea052.png';

export function RippleEffectSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={rippleBg} 
          alt="" 
          className="w-[95%] h-[95%] object-contain"
        />
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 md:order-1 w-full">
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
          <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bold leading-tight">
              My Unique Edge
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed font-medium">
              I bring a distinctive fusion of health, law and corporate expertise to subconscious transformation, helping my clients achieve their goals in both business and life by bridging high-performance with mental health and emotional well-being.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed font-medium">
              My approach is solution-focused, science-backed, and holistic, helping people rapidly overcome challenges like anxiety, depression, insomnia, phobias, OCD, chronic pain, and more.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed font-medium">
              I also specialize in peak performance, guiding entrepreneurs, professionals, and creatives to find clarity, make better decisions, and unleash their confidence and creativity, whether in the boardroom, on stage, or on the field.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed font-medium">
              My integrative approach, which always considers the mind-body connection, also helps my clients reconnect with themselves, discover their purpose, and support their rejuvenation goals, promoting better longevity through a happier, healthier life.
            </p>

            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 font-bold">
                My mantra:
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic leading-relaxed font-bold">
                "You're not stuck, you're just wired that way. The good news is: your brain can be rewired."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}