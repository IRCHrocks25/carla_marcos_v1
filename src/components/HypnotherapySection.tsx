import containerBg from '../assets/icons_footer/Container.jpg';

export function HypnotherapySection() {
  return (
    <section 
      className="relative py-0 overflow-hidden min-h-[100vh] sm:min-h-screen flex items-start md:items-center" 
      style={{ 
        marginTop: '-30px',
        backgroundImage: `url(${containerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0f172a'
      }}
    >
      {/* Subtle overlay only on bottom dark area for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-[1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-[2] w-full py-12 sm:py-16 md:py-20 lg:py-24" style={{ marginTop: '0', paddingTop: '20vh' }}>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-bold">
            Scientific Evidence of Hypnotherapy
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 md:mb-12 font-medium">
            The Science Is Catching Up to What Carla's Clients Already Know
          </p>
        </div>
        
        {/* Two column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Left column */}
          <div className="space-y-4 sm:space-y-5 text-white leading-relaxed font-medium text-sm sm:text-base md:text-lg">
            <p>
              Let's be clear: Hypnotherapy is not at the margins; it's at the heart. It's one of the most researched and respected tools in modern mind-body science
            </p>
            
            <p>
              Hypnosis (or trance) is as old as human awareness itself. For as long as we've existed, people have naturally shifted into trance states. Today, there's a renewed interest in using this state for self-growth and healing, because it's such a powerful tool for opening the mind to new levels of awareness. From this space, we gain perspective, clarity, and the ability to access inner resources that help us move forward.
            </p>
          </div>
          
          {/* Right column */}
          <div className="space-y-4 sm:space-y-5 text-white leading-relaxed font-medium text-sm sm:text-base md:text-lg">
            <p>
              Trance is actually a very natural state. We all drift in and out of it many times a day, while driving, reading, running, or even daydreaming. In this relaxed state, the conscious mind softens, and our awareness shifts, creating space for new insights.
            </p>
            
            <p>
              In trance, the unconscious mind becomes more receptive, more focused on positive suggestions and helpful thoughts. That's why hypnosis can be such a powerful ally when we want to improve our emotional state, break free from old patterns, and create lasting, positive change in our lives.
            </p>
          </div>
        </div>
        
        {/* Concluding statement */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium">
            Leading hospitals, universities, and psychology journals have confirmed what my clients already know:
          </p>
        </div>
      </div>
    </section>
  );
}