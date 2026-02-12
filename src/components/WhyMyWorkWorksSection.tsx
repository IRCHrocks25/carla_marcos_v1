import { Check } from 'lucide-react';
import backgroundImage from '../assets/backrounds/Frame 1707482119.png';

export function WhyMyWorkWorksSection() {
  const leftColumnAwards = [
    "Top Hypnotherapy Program of the Year - IAOTB, USA (2025)",
    "3 Best Rated Hypnotherapist in Harrogate, UK (2022-2025)",
    "Clinical Hypnotherapist of the Year (UK) - LuxLife Magazine (2024)",
    "Global CREA Award - Brainz Magazine, Sweden (2024)",
    "Carla Marcos Lopez's Journey of Passion and Purpose - Brainz Magazine (Cover Feature 2024)",
    "Empower Your Mind For Positive Change - Exclusive interview with Carla Marcos López - Brainz Magazine",
    "Top 50 Fearless Leaders Award - IAOTP, USA (2024)",
    "Top Clinical Hypnotherapist of the Year - IAOTP, USA (2024)"
  ];

  const rightColumnAwards = [
    "Women Leaders To Look Up To in 2025 - Passion Vista Magazine (Cover Feature)",
    "Women Leaders To Look Up To in 2025 Award - Passion Vista Magazine, India",
    "Esteemed member of the Brainz Magazine Expert Panel",
    "Best Hypnotherapy Business in Harrogate, UK for 2025 - Quality Business Awards UK",
    "Interview with Carla Marcos on the Brainz Magazine Podcast with Mark Sephton.",
    "Interview on the \"Live with the Famous Dr. Al\" Show with Dr. Allen Lycka - Solution-Focused Hypnotherapy for Positive Change.",
    "Interview on the npnHub Podcast - Uniting Neuroplasticians, with Dr. Justin James Kennedy - \"The Brain Under Hypnosis\" with Carla Marcos López."
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-visible" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Background image - keep full size on all screens including mobile */}
      <div className="absolute inset-0" style={{ bottom: '-800px', height: 'calc(100% + 800px)' }}>
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/10" style={{ bottom: '-800px', height: 'calc(100% + 800px)' }}></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 font-semibold" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
            Why My Work Works
          </h2>
        </div>

        {/* Introductory Text */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            I don't just teach subconscious transformation. I lived it. While sleep-deprived and overwhelmed, I rewired my own patterns, then built a method so effective 87% of my clients experience noticeable shifts within four sessions.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed sm:whitespace-nowrap font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            To date, I've helped 600+ men and women in 15+ countries stop fighting themselves and start flowing.
          </p>
        </div>

        {/* Two Column Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4">
            {leftColumnAwards.map((award, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-0.5 rounded-full flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7" style={{ backgroundColor: '#012194' }}>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#012194', fontFamily: "'Outfit', sans-serif" }}>
                  {award}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4">
            {rightColumnAwards.map((award, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-0.5 rounded-full flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7" style={{ backgroundColor: '#012194' }}>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#012194', fontFamily: "'Outfit', sans-serif" }}>
                  {award}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 font-semibold leading-relaxed" style={{ fontFamily: "'Spartan', sans-serif" }}>
            "Because when you find your unique balance, success stops being something you chase, and becomes something you embody."
          </p>
          <p className="text-sm sm:text-base md:text-lg text-purple-600 font-semibold mt-3 sm:mt-4" style={{ fontFamily: "'Spartan', sans-serif" }}>
            - Carla Marcos
          </p>
        </div>
      </div>
    </section>
  );
}

