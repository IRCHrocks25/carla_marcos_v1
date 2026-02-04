import newBg from 'figma:asset/1a5c560277cf451de3971bb0ae6c0bd5fae8e41a.png';

export function WhatHappensSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={newBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative wave pattern on LEFT edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 opacity-30 z-10">
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
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20 max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 font-bold leading-tight">
            What Happens When You Find Your Unique Balance
          </h2>
          
          <h3 className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5 md:mb-6 font-bold">
            The Life That's Waiting on the Other Side
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base md:text-lg">
            <p className="leading-relaxed">
              <strong>Sleep Like You Haven't For A Very Long Time.</strong> Deep, restorative sleep that actually refreshes you. Some clients experience this improvement after just one session.
            </p>
            
            <p className="leading-relaxed">
              <strong>Make Decisions with Unshakeable Clarity.</strong> No more second-guessing. No more analysis paralysis. You'll trust your instincts because your instincts will finally be trustworthy.
            </p>
            
            <p className="leading-relaxed">
              <strong>End the "I Know But I Don't Do" Cycle.</strong> Your actions will finally align with your values. The gap between who you are and who you want to be closes. Reclaim Your Creative Fire. That spark you buried under responsibilities and shoulds, It's still there, and it's ready to burn bright again.
            </p>
            
            <p className="leading-relaxed">
              <strong>Become the Leader You Were Born to Be.</strong> Not just in your career, but in your own life. When you master your inner world, your outer world transforms automatically.
            </p>
            
            <p className="leading-relaxed italic">
              "When you master your mind and find your unique balance, you don't just transform your own life, you become an inspiration for your family, friends, teams, and the wider community."
            </p>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl text-white pt-3 sm:pt-4 md:pt-5 font-bold leading-tight">
            This isn't just healing. This is leadership from the inside out.
          </h3>
        </div>
      </div>
    </section>
  );
}