import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import carlaImage from 'figma:asset/bc8f03524a39432312e17da12ea2144c2300d886.png';

export function BreakthroughSection() {
  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-purple-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1 max-w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight font-semibold" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
              The Exhaustion No One Talks About
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl text-purple-600 leading-snug font-semibold w-full pr-0 sm:pr-4 md:pr-8" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em' }}>
              <span className="block">The Woman Who Rewires Minds</span>
              <span className="block">(Including Her Own) Wants to Set You&nbsp;Free</span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed font-medium text-sm sm:text-base">
              <p>
                You've mastered the art of looking like you have it all together.
              </p>
              
              <p>
                But behind that polished exterior, you're running on reserves. You're the person who solved everyone else's problems while your own patterns kept you prisoner. You've read the books, hired the coaches, tried the strategies and still, that quiet voice whispers: "When will it finally feel easy?"
              </p>
              
              <p>
                Here's what I know about you: You're not flawed. You're brilliant. And you're tired of fighting a war against your own mind. You don't need fixing, you need freeing.
              </p>
              
              <p>
                What if I told you that your subconscious has been sabotaging your best intentions not because you are not capable, but because it's trying to protect you with outdated programming from a version of yourself you've long outgrown?
              </p>
              
              <p>
                I'm Carla Marcos and I've spent my life learning how to unlock the cage that even the most extraordinary people build around themselves.
              </p>
            </div>
            
            <p className="text-gray-900 text-base sm:text-lg font-bold pt-2 sm:pt-3 md:pt-4" style={{ fontFamily: "'Spartan', sans-serif" }}>
              Your conscious mind got you here. Your subconscious mind will set you free.
            </p>
            
            <h3 className="text-xl sm:text-2xl text-purple-600 font-semibold pt-4 sm:pt-5 md:pt-6" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em' }}>
              Ready to stop pushing and start flowing?
            </h3>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold mt-3 sm:mt-4 w-full sm:w-auto"
              style={{ fontFamily: "'Spartan', sans-serif" }}
            >
              Begin The Shift
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          
          {/* Right image */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black w-full max-w-md md:max-w-none">
              <ImageWithFallback
                src={carlaImage}
                alt="Carla Marcos - Professional Hypnotherapist"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}