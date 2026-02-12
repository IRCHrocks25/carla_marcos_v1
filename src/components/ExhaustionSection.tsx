import { ImageWithFallback } from './figma/ImageWithFallback';
import cosmicBrainImage from 'figma:asset/7cd90b161f1abd87fe28a3e87fc18653975e6135.png';
import logo1 from '../assets/icons/Logo Container.png';
import logo2 from '../assets/icons/Logo Container (1).png';
import logo3 from '../assets/icons/Logo Container (2).png';
import logo4 from '../assets/icons/Logo Container (3).png';
import logo5 from '../assets/icons/Logo Container (4).png';
import logo6 from '../assets/icons/Logo Container (5).png';

export function ExhaustionSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* As Seen On Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="text-gray-700 tracking-[0.3em] text-xs mb-6 sm:mb-8 font-semibold">
            AS SEEN ON
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-90 grayscale">
            <img src={logo1} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
            <img src={logo2} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
            <img src={logo3} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
            <img src={logo4} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
            <img src={logo5} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
            <img src={logo6} alt="Network Logo" style={{ height: '40px', maxHeight: '40px', width: 'auto' }} className="object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center mt-12 sm:mt-16 md:mt-20">
          {/* Left - Cosmic Brain Image */}
          <div className="relative flex justify-center order-2 md:order-1">
            <ImageWithFallback
              src={cosmicBrainImage}
              alt="Cosmic brain representing subconscious alignment"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Right content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 leading-tight font-semibold" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
              When your conscious and subconscious finally align, success stops feeling like a battle and starts feeling inevitable
            </h2>
            
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-normal tracking-wide" style={{ lineHeight: '1.8', letterSpacing: '0.01em' }}>
              You might feel stuck right now, like you're caught in patterns you just can't escape. And no matter what you do, you circle back to that same old, familiar, unwanted mode. But here's the good news: your brain can be rewired.
            </p>
          </div>
        </div>

        {/* Bottom purple text */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <div className="text-xl sm:text-2xl md:text-3xl text-purple-600 leading-relaxed font-semibold w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto px-4" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em' }}>
            <div className="block">Your mind already holds the blueprint for your best life. Let's bring it into focus</div>
            <div className="block">and allow it to transform into the reality you live&nbsp;and&nbsp;breathe.</div>
          </div>
        </div>
      </div>
    </section>
  );
}