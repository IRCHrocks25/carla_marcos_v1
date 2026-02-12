import personImg from 'figma:asset/6b695bcb38c7d5df655963a46678195c823cece9.png';

export function PersonBecomingSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 sm:mb-4 font-semibold" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
            The person you're becoming
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600 font-semibold">
            My Story Is Your Story (Just a Few Chapters Ahead)
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start mb-12 sm:mb-14 md:mb-16">
          {/* Left image with purple wavy background */}
          <button
            onClick={() => console.log('Clicked: Person becoming image')}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer mx-auto max-w-md lg:max-w-none w-full"
          >
            {/* Purple wavy background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-fuchsia-600">
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" preserveAspectRatio="none">
                <defs>
                  <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q25 30, 50 50 T100 50" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="3" fill="none"/>
                    <path d="M0 60 Q25 40, 50 60 T100 60" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="3" fill="none"/>
                    <path d="M0 70 Q25 50, 50 70 T100 70" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="3" fill="none"/>
                  </pattern>
                </defs>
                <rect width="500" height="700" fill="url(#waves)"/>
              </svg>
            </div>
            
            <img
              src={personImg}
              alt="The person you're becoming"
              className="relative z-10 w-full h-full object-cover"
            />
          </button>
          
          {/* Right content */}
          <div className="flex flex-col justify-start space-y-4 md:space-y-5 text-gray-700 text-sm md:text-base">
            <p className="leading-relaxed">
              I used to be the woman who had all the answers for everyone else and who thought she had everything worked out.
            </p>
            
            <p className="leading-relaxed">
              Born into a family of mental health professionals in Barcelona, psychology, and especially the workings of the subconscious, became my native language. I understood early on that the subconscious is the language you must speak to truly connect with the deeper parts of the mind. It was the very air I breathed. I first qualified as a nurse, then became a pharma lawyer, and, driven by a lifelong fascination with human potential, neuroscience, and modern psychotherapeutic approaches, I eventually became a clinical hypnotherapist.
            </p>
            
            <p className="leading-relaxed">
              But knowing about the mind and mastering it are two completely different things.
            </p>
            
            <p className="leading-relaxed">
              When I relocated to the UK with a newborn and a toddler, I had to buy, sell, and renovate homes, rebuild my career and social life in a new language and in one town after another, all while building a business and managing it all on my own as my husband travelled for work. That's when I discovered that even experts aren't always experts at their own patterns of overwhelm, and that they can have blind spots.
            </p>
            
            <p className="leading-relaxed font-bold text-base md:text-lg">
              That breakdown became my breakthrough.
            </p>
            
            <p className="leading-relaxed">
              The moment I stopped trying to think my way out of exhaustion and started rewiring the subconscious patterns that created it, my entire reality shifted. And the change lasted.
            </p>
            
            <p className="leading-relaxed">
              That's when I knew: The men and women who need this work most are the ones who, like me, have spent their lives being the solution for everyone else.
            </p>
            
            <p className="text-purple-600 font-bold text-lg md:text-xl leading-relaxed">
              You don't need more information.<br />
              You need transformation.
            </p>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center space-y-5 sm:space-y-6 md:space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-600 font-semibold" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
            Step Into the Person You're Becoming
          </h3>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            You've carried everyone else. Now it's your turn to feel supported, restored, and unstoppable.
          </p>
          
          <button
            onClick={() => console.log('Clicked: Start transformation CTA')}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Start your transformation today
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="text-purple-600 font-bold text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            Because the person you're becoming deserves to live in alignment, with clarity, calm, and unique balance.
          </p>
        </div>
      </div>
    </section>
  );
}