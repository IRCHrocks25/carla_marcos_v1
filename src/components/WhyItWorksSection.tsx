import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import brainBg from 'figma:asset/10c2ee1d5a6f1fff9cd785a2cc6f678b0f4bd695.png';

export function WhyItWorksSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900">
      {/* Brain background - keep full size on all screens including mobile */}
      <div className="absolute inset-0">
        <img 
          src={brainBg} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl hidden md:block"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 font-semibold leading-tight" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.02em' }}>
            The Woman Behind the Breakthrough
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            When Life Forced Me to Practice What I Preached
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-white max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Left column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-white/90 leading-relaxed font-normal text-base sm:text-lg md:text-xl" style={{ lineHeight: '1.8', letterSpacing: '0.01em' }}>
            <p className="text-base sm:text-lg md:text-xl">
              I thought I knew everything about the mind...
            </p>
            
            <p className="text-base sm:text-lg md:text-xl">
              Pharma lawyer. Qualified nurse. Award-winning clinical hypnotherapist. I'd been obsessed in psychology for as long as I could remember, since I was a little girl. I spoke several languages. I had gathered years of diverse professional and life experience, and carried all the credentials, the knowledge, and the toolkit anyone could wish for. By all appearances, I was the woman who had it all figured out.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl">
              Then life happened. A new country. A new language. A toddler. A newborn. Buying, selling, and renovating homes. Rebuilding my career and social life in new environments, one town after another.
            </p>
          </div>
          
          {/* Right column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-white/90 leading-relaxed font-normal text-base sm:text-lg md:text-xl" style={{ lineHeight: '1.8', letterSpacing: '0.01em' }}>
            <p className="text-base sm:text-lg md:text-xl">
              Building a business. And trying to juggle it all by myself while my husband traveled for work...
            </p>
            
            <p className="text-base sm:text-lg md:text-xl">
              I was drowning in my own expertise.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl">
              I knew there had to be another way. That's when I discovered the most humbling truth of my career: Knowing how the mind works intellectually is not the same as having aligned it emotionally.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl">
              The moment I stopped fighting my subconscious and started partnering with it, everything shifted, <span className="text-pink-300 italic text-base sm:text-lg md:text-xl">not just my stress levels</span>, but my entire reality.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-7xl mx-auto font-semibold leading-relaxed px-4">
            <span className="block text-lg sm:text-xl md:text-2xl">So now, I've decided to dedicate my life to helping you transform your mind that creates your life, so that you can <br/> stop pushing against invisible walls and start flowing toward the life you truly want.&nbsp;Interested?</span>
          </div>
          
          <Button 
            size="xl" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 sm:px-12 py-5 sm:py-6 text-1xl sm:text-2xl font-bold mx-auto transition-all duration-300 hover:scale-105 relative overflow-hidden group rounded-lg flex items-center justify-between"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}