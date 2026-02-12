import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import heroBackground from 'figma:asset/649bc4c02c9919a704b85add057ee4fbcae871f1.png';

export function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden pt-0 pb-8 sm:pt-12 sm:pb-12 md:py-16 lg:py-20 xl:py-28 min-h-0 sm:min-h-[90vh]"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e1b4b'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start md:items-center">
          {/* Left content */}
          <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 order-2 md:order-1 -mt-12 sm:mt-0">
            <h1 className="font-semibold text-left m-0 p-0" style={{ fontFamily: "'Spartan', sans-serif", lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left m-0 p-0">STOP PUSHING.</div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left m-0 p-0">START FLOWING.</div>
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold leading-tight" style={{ fontFamily: "'Spartan', sans-serif", letterSpacing: '-0.01em' }}>
              <span className="block sm:inline">Transform the Mind That Creates Your Life,</span>
              <span className="block sm:inline sm:ml-1">And Find Your Unique Balance</span>
            </h2>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium break-words">
              You're smart. You're capable. You've achieved what others dream of, yet 
              something still feels off. The books, courses, and willpower have only 
              taken you so far... because the real change happens deeper.
            </p>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium break-words" style={{ fontFamily: "'Outfit', sans-serif" }}>
              I combine the drive and precision of a pharma lawyer, the holistic care of 
              a nurse, and the deep transformation tools of a multi-award-winning 
              clinical hypnotherapist to help you rewire the subconscious patterns 
              holding you back, intentionally reshaping your brain's neural pathways 
              while developing new, empowering thought patterns, behaviours, and 
              responses in alignment with your conscious goals.
            </p>
            
            <div className="pt-2 sm:pt-3 md:pt-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
                >
                  Begin the Shift
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - empty space to let background show through */}
          <div className="relative order-1 md:order-2 h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            {/* This div creates space for the background image on the right side */}
          </div>
        </div>
      </div>
    </section>
  );
}