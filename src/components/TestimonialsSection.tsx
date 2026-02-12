import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  // Helper function to render text with percentages in Spartan font
  const renderTextWithPercentages = (text: string) => {
    const parts = text.split(/(\d+%|\d+-\d+%)/g);
    return parts.map((part, i) => 
      /\d+%|\d+-\d+%/.test(part) ? (
        <span key={i} style={{ fontFamily: "'Spartan', sans-serif" }}>{part}</span>
      ) : (
        part
      )
    );
  };

  // Helper function to render percentage with proper structure for ranges
  const renderPercentage = (percentage: string) => {
    if (percentage.includes('-')) {
      const [start, end] = percentage.split('-');
      return (
        <div className="flex items-baseline gap-1">
          <span>{start}</span>
          <span className="text-2xl sm:text-3xl">-</span>
          <span>{end}</span>
        </div>
      );
    }
    return <span>{percentage}</span>;
  };

  const stats = [
    {
      percentage: "40-60%",
      description: "Fewer post-operative complications and 25% faster recovery with pre-surgical hypnotherapy."
    },
    {
      percentage: "80%",
      description: "of hypnotherapy patients report improved quality of life using hypnotherapy for side effect management."
    },
    {
      percentage: "75%",
      description: "Hypnotherapy reduces medical anxiety in children by up to",
      small: true,
      reverseOrder: true
    },
    {
      percentage: "30-50%",
      description: "reduction in opioid dependency through hypnotherapy-based pain management."
    },
    {
      percentage: "40%",
      description: "less pain was reported with mothers using hypnotherapy before childbirth."
    },
    {
      percentage: "70-80%",
      description: "improvement in IBS symptoms sustained over 12 months."
    },
    {
      percentage: "85%",
      description: "chronic insomnia sufferers maintain sleep improvements for 6+ months."
    },
    {
      percentage: "60%",
      description: "PTSD therapy combined with hypnotherapy leads to greater symptom reduction.",
      descriptionBefore: "PTSD therapy combined with hypnotherapy leads to greater",
      descriptionAfter: "symptom reduction.",
      small: true,
      splitFormat: true
    },
    {
      percentage: "75%",
      description: "Smoking cessation success rate increase to with hypnotherapy, versus 45% with other methods.",
      descriptionBefore: "Smoking cessation success rate increase to",
      descriptionAfter: "with hypnotherapy, versus 45% with other methods.",
      small: true,
      splitFormat: true
    },
    {
      percentage: "10-15%",
      description: "Students see a boost in exam scores and a significant drop in anxiety after hypnotherapy.",
      small: true
    }
  ];

  return (
    <section className="relative overflow-visible">
      {/* Stats Section - Built with Components */}
      <div className="relative w-full bg-gradient-to-b from-black via-indigo-950 to-purple-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-transparent border-2 border-purple-500/40 rounded-xl md:rounded-2xl p-5 sm:p-6 flex flex-col justify-start items-start h-[180px] sm:h-[200px]"
              >
                {stat.splitFormat ? (
                  <>
                    <p className="text-white/90 text-xs sm:text-sm leading-snug mb-2 sm:mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {renderTextWithPercentages(stat.descriptionBefore)}
                    </p>
                    <div className="text-4xl sm:text-5xl text-white mb-2 sm:mb-3 font-normal h-12 sm:h-14 flex items-center" style={{ fontFamily: "'Spartan', sans-serif" }}>
                      {renderPercentage(stat.percentage)}
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {renderTextWithPercentages(stat.descriptionAfter)}
                    </p>
                  </>
                ) : stat.reverseOrder ? (
                  <>
                    <p className="text-white/90 text-xs sm:text-sm leading-snug mb-2 sm:mb-3 mt-4 sm:mt-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {renderTextWithPercentages(stat.description)}
                    </p>
                    <div className="text-4xl sm:text-5xl text-white font-normal h-12 sm:h-14 flex items-center" style={{ fontFamily: "'Spartan', sans-serif" }}>
                      {renderPercentage(stat.percentage)}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-4xl sm:text-5xl text-white mb-2 sm:mb-3 font-normal h-12 sm:h-14 flex items-center" style={{ fontFamily: "'Spartan', sans-serif" }}>
                      {renderPercentage(stat.percentage)}
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {renderTextWithPercentages(stat.description)}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom text */}
          <p className="text-white/90 text-center mb-6 sm:mb-7 md:mb-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] mx-auto text-sm sm:text-base md:text-lg px-4 overflow-visible" style={{ fontFamily: "'Outfit', sans-serif", wordBreak: 'normal', overflowWrap: 'normal' }}>
            These numbers reflect what I see in practice every day: fast, lasting, whole-person transformation rooted in science.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold w-full sm:w-auto whitespace-normal text-center"
            >
              <span className="block sm:inline">Explore the Science Behind</span>
              <span className="block sm:inline sm:ml-1">the Shift</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}