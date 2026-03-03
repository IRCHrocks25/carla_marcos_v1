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
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight font-semibold tracking-normal" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: 0 }}>
              The Exhaustion No One Talks About
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug font-semibold w-full max-w-xl pr-0 sm:pr-4 md:pr-8" style={{ fontFamily: "'Spartan', sans-serif" }}>
              <span className="block" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #7c3aed 25%, #a855f7 50%, #a855f7 75%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                The Woman Who Rewires Minds Wants to Set You Free
              </span>
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
            
            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed font-normal text-sm sm:text-base pt-4 sm:pt-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <p>Top Hypnotherapy Program of the Year - IAOTB, USA (2025)</p>
              <p>3 Best Rated Hypnotherapist in Harrogate, UK (2022-2025)</p>
              <p>Clinical Hypnotherapist of the Year (UK) - LuxLife Magazine (2024)</p>
              <p>Global CREA Award - Brainz Magazine, Sweden (2024)</p>
              <p>Carla Marcos Lopez's Journey of Passion and Purpose - Brainz Magazine (Cover Feature 2024)</p>
              <p>Empower Your Mind For Positive Change - Exclusive interview with Carla Marcos López - Brainz Magazine</p>
              <p>Top 50 Fearless Leaders Award - IAOTP, USA (2024)</p>
              <p>Top Clinical Hypnotherapist of the Year - IAOTP, USA (2024)</p>
              <p>Women Leaders To Look Up To in 2025 - Passion Vista Magazine (Cover Feature)</p>
              <p>Women Leaders To Look Up To in 2025 Award - Passion Vista Magazine, India</p>
              <p>Esteemed member of the Brainz Magazine Expert Panel</p>
              <p>Best Hypnotherapy Business in Harrogate, UK for 2025 - Quality Business Awards UK</p>
              <p>Interview with Carla Marcos on the Brainz Magazine Podcast with Mark Sephton.</p>
              <p>Interview on the "Live with the Famous Dr. Al" Show with Dr. Allen Lycka - Solution-Focused Hypnotherapy for Positive Change.</p>
              <p>Interview on the npnHub Podcast - Uniting Neuroplasticians, with Dr. Justin James Kennedy - "The Brain Under Hypnosis" with Carla Marcos López.</p>
            </div>
            
            <p className="text-gray-900 text-base sm:text-lg font-bold pt-2 sm:pt-3 md:pt-4" style={{ fontFamily: "'Spartan', sans-serif" }}>
              Your conscious mind got you here. Your subconscious mind will set you free.
            </p>
            
            <h3 className="text-xl sm:text-2xl text-purple-600 font-semibold pt-4 sm:pt-5 md:pt-6" style={{ fontFamily: "'Spartan', sans-serif" }}>
              Ready to stop pushing and start flowing?
            </h3>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold mt-3 sm:mt-4 w-full sm:w-auto whitespace-normal"
              style={{ fontFamily: "'Spartan', sans-serif" }}
            >
              Begin The Shift
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Button>
          </div>
          
          {/* Right image */}
          <div className="relative flex justify-start order-1 md:order-2 pl-4 sm:pl-8 md:pl-12">
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