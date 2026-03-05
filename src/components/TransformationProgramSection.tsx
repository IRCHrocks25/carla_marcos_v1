import { Button } from './ui/button';

import { ArrowUpRight } from 'lucide-react';

import rippleBg from 'figma:asset/590ec3243077f53316f4fba98bda07e7e6c2a531.png';
import vectorBg from '../assets/backrounds/Vector.png';

// Booking URL - Update this with your actual booking/consultation link
const BOOKING_URL = 'https://calendly.com';

export function TransformationProgramSection() {

  return (

    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/20">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Top Card - The Ripple Effect */}

        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-12 sm:mb-16 md:mb-20 lg:mb-24 shadow-2xl">

          

          {/* Content */}

          <div 

            className="relative z-10 text-center py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12"

            style={{

              backgroundImage: `url(${rippleBg})`,

              backgroundSize: 'cover',

              backgroundPosition: 'center'

            }}

          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-5 md:mb-6 font-semibold" style={{ fontFamily: "'Spartan', sans-serif" }}>

              The Ripple Effect

            </h2>

            

            <p className="text-sm sm:text-base md:text-lg text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', sans-serif" }}>

              Helping someone transform isn't just about them. It's about the energy they carry into their families, teams, and communities. Positive change spreads.

            </p>

            

            <p className="text-xl sm:text-xl md:text-2xl text-white max-w-6xl mx-auto mb-8 sm:mb-9 md:mb-10 leading-relaxed font-semibold" style={{ fontFamily: "'Spartan', sans-serif" }}>

              Ready to rewire your mind for peak performance, emotional mastery,<br />

              and true success? Let's start your breakthrough today.

            </p>

            

            <Button 

              size="lg" 

              className="text-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 font-bold w-full sm:w-auto hover:opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-normal text-center"

              style={{ fontFamily: "'Outfit', sans-serif", backgroundImage: 'linear-gradient(to right, #A443FD, #830CF5)' }}

              onClick={() => window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')}

            >

              Book your Initial Consultation

              <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />

            </Button>

            <p className="text-white text-base sm:text-lg md:text-xl text-center font-semibold opacity-90" style={{ fontFamily: "'Spartan', sans-serif" }}>

              Work with me globally, online, in English or Spanish

            </p>

          </div>

        </div>



        {/* Bottom Section - The Exhaustion No One Talks About */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Left Column */}

          <div className="space-y-6 sm:space-y-7 md:space-y-8 overflow-visible">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight font-semibold" style={{ fontFamily: "'Spartan', sans-serif", whiteSpace: 'pre-line' }}>

              The Exhaustion No One

Talks About

            </h2>

            

            <div className="space-y-4 sm:space-y-5 md:space-y-6 overflow-visible">

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap overflow-visible -ml-2 sm:-ml-3 md:-ml-4" style={{ fontFamily: "'Spartan', sans-serif", backgroundImage: 'linear-gradient(to right, #7c3aed, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>

                When Your Success Becomes Your Prison

              </h3>

              

              <p className="text-black leading-relaxed text-base sm:text-lg md:text-xl">

                You're successful by every external measure.

              </p>

              

              <p className="text-black leading-relaxed text-sm sm:text-base">

                Yet you lie awake at 3 AM wondering why you still feel like you're performing your life instead of living it.

              </p>

              

              <h3 className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent pt-2 sm:pt-3 md:pt-4 font-semibold" style={{ fontFamily: "'Spartan', sans-serif" }}>

                The invisible struggle of high-achievers:

              </h3>

              

              <div className="space-y-3 sm:space-y-4">

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

                  <span className="font-semibold text-gray-900">Your Mind Never Stops:</span> Anxiety disguised as "being thorough." Overthinking masked as "being strategic." Decision paralysis dressed up as "being careful."

                </p>

                

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

                  <span className="font-semibold text-gray-900">Your Body Keeps the Score:</span> Stress headaches that no amount of water fixes. Energy crashes that caffeine can't cure. Gastrointestinal symptoms that come and go. Sleep that never actually refreshes you.

                </p>

                

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

                  <span className="font-semibold text-gray-900">Your Soul Feels Starved:</span> You've optimized everything except joy. You've mastered everything except ease. You've achieved everything except the feeling that you can finally exhale.

                </p>

              </div>

            </div>

          </div>

          

          {/* Right Column */}

          <div className="space-y-6 sm:space-y-7 md:space-y-8">

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

              The Pattern You Can't Break: You know exactly what you should do, but you don't do it. Or you do it for a while, then slide back into old habits. The gap between knowing and doing feels insurmountable.

            </p>

            

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
Start your transformation today and experience the calm, clarity, and confidence you've been craving.
              Here's the truth nobody tells you, mostly because they don't know it themselves: willpower is not the answer.

            </p>

            

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

              This doesn't devalue willpower, far from it. It simply means that for lasting change, your conscious and subconscious minds need to be working together. The subconscious is still running programs written when you were just 5-7 years old, and no amount of conscious effort alone can override that code.

            </p>

            

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-8 sm:mb-0 -mt-4 sm:mt-0">

              Until now. And that's where I come in.

            </p>

            

            {/* Quote Box with Vector img at the back */}
            <div className="relative rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 min-h-[220px] flex items-center justify-center mt-6 sm:mt-0">
              {/* Vector image - independent element at the back, larger - reduced on mobile to prevent overlap with intro text */}
              <img 
                src={vectorBg}
                alt=""
                className="absolute left-0 bottom-0 z-0 w-[200px] sm:w-[350px] md:w-[400px] h-auto opacity-50 object-contain object-left-bottom pointer-events-none"
                style={{ transform: 'translateY(1rem)' }}
              />
              {/* Translucent quote box on top */}
              <div className="relative z-10 mt-10 sm:mt-12 md:mt-16 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-md text-left max-w-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>
                <p className="text-base sm:text-lg md:text-xl text-purple-600 font-medium mb-2 sm:mb-3 leading-relaxed">
                  We can't think our way out of patterns that were never<br />
                  created by thinking in the first place.
                </p>
                <p className="text-gray-900 font-normal text-xs sm:text-sm">
                  - CARLA MARCOS
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}