import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import pyramidFrame from '../assets/pyramid/Frame 1707482142.png';
import sectionBg from '../assets/backrounds/bgca8v3 1.png';
import pathwayImage1 from '../assets/pyramid/group1.png';
import pathwayImage2 from '../assets/pyramid/group2.png';
import pathwayImage3 from '../assets/pyramid/group3.png';
import pyramidImage from '../assets/pyramid/pyramid.png';

export function PathwaysToFreedomSection() {
  const pathways = [
    {
      title: "Diamond Transformation Program",
      titleLine2: "",
      subtitle: "The Bespoke 1:1 Experience",
      subtitleLine1: "(Most Transformational)",
      description: "My award-winning signature program, tailored to your unique patterns and\u00A0goals. Delivered globally via secure video sessions. For the man or woman ready to rewrite their story from the ground\u00A0up.",
      image: pathwayImage1,
      borderColor: 'border-purple-500',
      titleColor: 'text-purple-600'
    },
    {
      title: "THE RUBY SUCCESS SOCIETY",
      subtitle: "Group Transformation\u00A0Circles",
      subtitleLine1: "(Coming\u00A0Soon)",
      description: "Intimate, supportive communities where you'll discover you're not alone and you'll never have to fight these battles solo\u00A0again.",
      image: pathwayImage2,
      borderColor: 'border-red-500',
      titleColor: 'text-red-600',
      titleColorHex: '#FF0100'
    },
    {
      title: "SAPPHIRE HYPNOTIC SOUNDSCAPES",
      subtitle: "The Self-Liberation Collection",
      subtitleLine1: "Most Transformational",
      description: "My book on how mastering the subconscious language and hypnosis opens the gateway to deep, true, and lasting transformation, accompanied by a practical guide and a sleep hypnosis recording album—composed in Great Britain's creative heart and recorded in Ibiza, the high-frequency island of joy and\u00A0flow. Perfect if you want to begin your journey\u00A0today.",
      image: pathwayImage3,
      borderColor: 'border-blue-500',
      titleColor: 'text-blue-600'
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Section background image - centered */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Full-width pyramid banner - scale slightly to eliminate subpixel white-line gaps */}
      <div className="w-full leading-[0] block overflow-hidden">
        <img
          src={pyramidFrame}
          alt="Your Pathway to Freedom - Diamond, Ruby, Sapphire programs"
          className="w-full h-auto object-contain block"
          style={{ transform: 'scale(1.01)', transformOrigin: 'center center' }}
        />
      </div>
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Subtle wave pattern background */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${i * 40} Q400,${i * 40 - 20} 800,${i * 40} T1600,${i * 40}`}
              stroke="#8b5cf6"
              strokeWidth="1"
              fill="none"
              opacity={0.3}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-x-hidden">
        {/* Main Content Grid: Left Cards, Center Pyramid, Right Descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16 items-stretch w-full min-w-0">
          {/* Left Column: Program Visual Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-5 md:gap-6 items-center">
            {pathways.map((pathway, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col aspect-square w-[150px] sm:w-[160px] md:w-[170px]">
                <div className="flex-1 w-full overflow-hidden flex items-center justify-center p-2 sm:p-3">
                  <ImageWithFallback
                    src={pathway.image}
                    alt={pathway.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Pyramid Image */}
          <div className="lg:col-span-1 flex items-center justify-center order-first lg:order-none h-full">
            <img
              src={pyramidImage}
              alt="Pathway Pyramid"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-full object-contain"
            />
          </div>

          {/* Right Column: Program Description Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6 sm:gap-7 md:gap-8 w-full min-w-0">
            {pathways.map((pathway, idx) => (
              <div key={idx} className="min-w-0 w-full max-w-full overflow-x-hidden rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-6 sm:p-7 md:p-8 space-y-3 sm:space-y-4 bg-white" style={{ border: '1px solid #A341FD' }}>
                <h3 className={`text-lg sm:text-xl md:text-2xl mb-2 font-semibold leading-tight break-words ${!pathway.titleColorHex ? pathway.titleColor : ''}`} style={{ fontFamily: "'Spartan', sans-serif", ...(pathway.titleColorHex && { color: pathway.titleColorHex }) }}>
                  {pathway.titleLine2 ? (
                    <>
                      <span className="block">{pathway.title}</span>
                      <span className="block">{pathway.titleLine2}</span>
                    </>
                  ) : (
                    pathway.title
                  )}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                  {pathway.subtitleLine1 ? (
                    <span className="block whitespace-pre-line">{pathway.subtitle}{'\n'}{pathway.subtitleLine1}</span>
                  ) : (
                    pathway.subtitle
                  )}
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                  {pathway.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-4 pt-12 sm:pt-16 md:pt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-semibold bg-clip-text text-transparent" style={{ fontFamily: "'Spartan', sans-serif", background: 'linear-gradient(to right, #0057EF 10%, #A341FD 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Your Future Self Is Waiting
          </h3>
          
          <p className="text-gray-700 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Whether you want the deep, tailored transformation of my 1:1 program, the shared strength of a group, or the instant reset of guided audios you can start today.
          </p>
          
          <Button 
            size="lg" 
            style={{ background: 'linear-gradient(to right, #830CF5, #A443FD)' }}
            className="hover:opacity-90 text-white transition-opacity px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-xl w-full sm:w-auto"
          >
            <span className="inline-block">Choose your pathway and begin now</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 inline-block" />
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
