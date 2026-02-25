import bgImage from 'figma:asset/d6a5b95d3f0ff7ada8f5211863055786e3886531.png';
import { Check, ArrowRight } from 'lucide-react';

export function ResultsSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          {/* Background image for the whole frame */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          
          <div className="relative z-10">
            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 max-w-2xl space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 md:mb-3 font-bold">
                  The Siesta Bliss Mind Reset
                </h2>
                <p className="text-lg sm:text-xl text-white font-semibold">
                  Your oasis for the mind.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-white font-medium">
                A simple, soothing way to pause, reset, and rediscover your inner flow.
              </p>
              
              <p className="text-white text-base sm:text-lg font-bold">
                Feel better in 20 minutes. Start now it's free.
              </p>
              
              <div className="space-y-3">
                <p className="text-white font-semibold text-sm sm:text-base">
                  This powerful starter pack includes:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white font-medium">
                      Guided sleep hypnosis audio (calming anxiety)
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white font-medium">
                      Guided sleep hypnosis audio (deep sleep)
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white font-medium">
                      The Subconscious Shift e-booklet (title to be confirmed)
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                Created to help you slow racing thoughts, sleep deeply, and reset your 
                emotional baseline, this toolkit is your first step towards subconscious 
                alignment.
              </p>
              
              <p className="text-white text-base sm:text-lg font-semibold">
                Start shifting from survival mode to calm clarity today.
              </p>
              
              <button
                onClick={() => console.log('Clicked: Get the Free Toolkit Now')}
                className="inline-flex items-center justify-center gap-2 hover:opacity-90 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold mt-3 md:mt-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer w-full sm:w-auto"
                style={{ background: 'linear-gradient(to right, #830CF5, #830CF5)' }}
              >
                Get the Free Toolkit Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}