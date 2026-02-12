import newBg from 'figma:asset/1a5c560277cf451de3971bb0ae6c0bd5fae8e41a.png';

export function WhatHappensSection() {
  return (
    <section className="relative overflow-visible min-h-[100vh] sm:min-h-[900px] md:min-h-[1000px]">
      {/* Background image - keep full size on all screens, especially mobile */}
      <div className="absolute inset-0">
        <img 
          src={newBg} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* Dark overlay for better text readability - stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-900/50 to-purple-900/30 sm:from-purple-900/50 sm:via-purple-900/30 sm:to-purple-900/20 pointer-events-none"></div>
      
      {/* Additional dark overlay on left side where text is */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-transparent w-full sm:w-2/3 pointer-events-none"></div>
      
      {/* Decorative wave pattern on LEFT edge - hidden on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 opacity-30 z-10 hidden sm:block">
        <svg className="w-full h-full" viewBox="0 0 100 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M 10 ${i * 45} Q 30 ${i * 45 + 15} 50 ${i * 45} T 90 ${i * 45}`}
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              opacity={0.4 + (i % 2) * 0.2}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 -ml-2 pr-4 sm:-ml-1 sm:pr-6 md:pl-0 md:pr-8 lg:pl-2 lg:pr-12 py-12 sm:py-16 md:py-20 lg:py-24 max-w-6xl mx-auto">
        <div className="space-y-5 sm:space-y-6 md:space-y-7 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-5 font-semibold leading-tight drop-shadow-2xl" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em', textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)' }}>
            <span className="block">What Happens When</span>
            <span className="block">You Find Your Unique&nbsp;Balance</span>
          </h2>
          
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-7 md:mb-8 font-semibold break-words leading-relaxed" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em', textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6)' }}>
            <span className="block sm:inline">The Life That's Waiting</span>
            <span className="block sm:inline sm:ml-1">on the Other Side</span>
          </h3>
          
          <div className="space-y-5 sm:space-y-6 text-white w-full">
            <div className="leading-relaxed text-sm sm:text-base md:text-lg font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              <strong className="font-bold text-sm sm:text-base md:text-lg block mb-2 sm:mb-3">Sleep Like You Haven't For A Very Long Time.</strong> 
              <p className="text-sm sm:text-base md:text-lg">Deep, restorative sleep that actually refreshes you. Some clients experience this improvement after just one session.</p>
            </div>
            
            <div className="leading-relaxed text-sm sm:text-base md:text-lg font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              <strong className="font-bold text-sm sm:text-base md:text-lg block mb-2 sm:mb-3">Make Decisions with Unshakeable Clarity.</strong> 
              <p className="text-sm sm:text-base md:text-lg">No more second-guessing. No more analysis paralysis. You'll trust your instincts because your instincts will finally be trustworthy.</p>
            </div>
            
            <div className="leading-relaxed text-sm sm:text-base md:text-lg font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              <strong className="font-bold text-sm sm:text-base md:text-lg block mb-2 sm:mb-3">End the "I Know But I Don't Do" Cycle.</strong> 
              <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Your actions will finally align with your values. The gap between who you are and who you want to be closes.</p>
              <strong className="font-bold text-sm sm:text-base md:text-lg block mb-2 sm:mb-3">Reclaim Your Creative Fire.</strong> 
              <p className="text-sm sm:text-base md:text-lg">That spark you buried under responsibilities and shoulds, It's still there, and it's ready to burn bright again.</p>
            </div>
            
            <div className="leading-relaxed text-sm sm:text-base md:text-lg font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              <strong className="font-bold text-sm sm:text-base md:text-lg block mb-2 sm:mb-3">Become the Leader You Were Born to Be.</strong> 
              <p className="text-sm sm:text-base md:text-lg">Not just in your career, but in your own life. When you master your inner world, your outer world transforms automatically.</p>
            </div>
            
            <div className="leading-relaxed text-sm sm:text-base md:text-lg italic font-medium pt-3 sm:pt-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              <p className="text-sm sm:text-base md:text-lg">"When you master your mind and find your unique balance, you don't just transform your own life, you become an inspiration for your family, friends, teams, and the wider community."</p>
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white pt-5 sm:pt-6 md:pt-7 font-semibold leading-relaxed pb-8 sm:pb-10 md:pb-12" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em', textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)' }}>
            <span className="block sm:inline">This isn't just healing.</span>
            <span className="block sm:inline sm:ml-1">This is leadership from the inside out.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}