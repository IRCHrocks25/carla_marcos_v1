import bgImage from 'figma:asset/90b8ffb999f632bb3c9f4c87960e6d9f966a26c1.png';
import footerBgImage from 'figma:asset/770bdbcaa6a0ef56c26ee1dd44153120720a1341.png';
import logoImage from '../assets/logo/logo.png';
import tiktokIcon from '../assets/socials/TikTok4.png';
import instagramIcon from '../assets/socials/Instagram4.png';
import linkedinIcon from '../assets/socials/LinkedIn4.png';
import footerIcon1 from '../assets/icons_footer/Frame 1618872865.png';
import footerIcon2 from '../assets/icons_footer/Frame 1618872866.png';
import footerIcon3 from '../assets/icons_footer/Frame 1618872867 (1).png';
import footerIcon4 from '../assets/icons_footer/Frame 1618872869.png';
import footerIcon5 from '../assets/icons_footer/Frame 1618872870 (1).png';
import footerIcon6 from '../assets/icons_footer/Frame 1618872871.png';
import { Button } from './ui/button';
import { Mail, Instagram, Facebook, Linkedin, Phone, MapPin, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main CTA area */}
      <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Soft wave pattern background */}
        <div 
          className="absolute inset-0 opacity-30 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-6 sm:space-y-7 md:space-y-8">
            {/* Main headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
              Ready for the Change That Lasts?
            </h2>
            
            {/* Purple subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-purple-700 font-semibold px-4">
              You've done all the hard things. You've survived the pressure. You've carried the weight.
            </p>
            
            {/* Body text */}
            <div className="space-y-2 text-gray-900 text-base sm:text-lg max-w-3xl mx-auto font-semibold px-4">
              <p>Now it's time to lead from alignment, not exhaustion.</p>
              <p>Whether you're ready to start small or go deep, there's a path for you.</p>
            </div>
            
            {/* Main CTA button */}
            <div className="pt-3 sm:pt-4 px-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 font-bold w-full sm:w-auto">
                Take the 5-Minute Self-Check
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
            
            {/* Choose your next step */}
            <div className="pt-10 sm:pt-12">
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-5 sm:mb-6 font-bold px-4">
                Choose your next step:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto font-bold flex items-center justify-center text-sm sm:text-base"
                >
                  Start with the Free Toolkit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto font-bold flex items-center justify-center text-sm sm:text-base"
                >
                  The Self-Liberation Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto whitespace-normal font-bold flex items-center justify-center text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                >
                  Book Your Initial Consultation | 1:1 Session
                  <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                </Button>
              </div>
              
              <p className="text-gray-800 text-xs sm:text-sm mt-5 sm:mt-6 max-w-3xl mx-auto font-medium px-4">
                Alternatively, you'll soon have the option to join one of our group programs, so you can grow, heal, and thrive 
                alongside a supportive community.
              </p>
            </div>
            
            {/* Purple highlighted message */}
            <div className="pt-6 sm:pt-8 px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-purple-700 italic max-w-3xl mx-auto font-semibold">
                Your next chapter doesn't require more pushing. Just a new partnership with your mind.
              </p>
            </div>
            
            {/* Disclaimer */}
            <div className="pt-6 sm:pt-8 px-4">
              <p className="text-xs text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Disclaimer: Hypnotherapy is effective; however, results may vary, and success is not guaranteed. Full client commitment is important.
              </p>
            </div>
            
            {/* Professional Association Logos */}
            <div className="pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 overflow-hidden px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40">
              <div className="relative">
                <div className="flex animate-marquee gap-4 sm:gap-6 md:gap-8">
                  {/* First set */}
                  <div className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon1} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon2} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon3} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon4} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon5} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon6} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                  </div>
                  
                  {/* Second set (duplicate) */}
                  <div className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon1} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon2} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon3} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon4} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon5} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon6} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                  </div>
                  
                  {/* Third set (duplicate) */}
                  <div className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon1} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon2} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon3} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon4} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon5} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon6} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                  </div>
                  
                  {/* Fourth set (duplicate for seamless loop) */}
                  <div className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon1} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon2} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon3} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon4} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon5} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src={footerIcon6} alt="Professional Association" className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-none" />
                    </div>
                  </div>
                </div>
              </div>
              <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-25%);
                  }
                }
                .animate-marquee {
                  animation: marquee 24s linear infinite;
                  will-change: transform;
                }
                @media (min-width: 640px) {
                  .animate-marquee {
                    animation-duration: 24s;
                  }
                }
                @media (min-width: 768px) {
                  .animate-marquee {
                    animation-duration: 24s;
                  }
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden" style={{ backgroundColor: '#F8F4F0' }}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-8 sm:mb-10 items-start">
            {/* Brand Column */}
            <div className="space-y-4 sm:space-y-5" style={{ marginTop: '10px' }}>
              <img 
                src={logoImage} 
                alt="Carla Marcos Hypnotherapy" 
                className="w-40 sm:w-48 md:w-56 h-auto"
                style={{ background: 'transparent' }}
              />
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium" style={{ marginTop: '-8px' }}>
                <p className="block">Guiding Women and Men to Find Their Unique Balance Worldwide</p>
                <p className="block">Global Solution Focused Hypnotherapy | English & Spanish</p>
              </div>
            </div>
            
            {/* Quick Links and Social - Grouped together with smaller gap */}
            <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 items-start ml-4 sm:ml-6 md:ml-8" style={{ marginTop: '47px', paddingTop: '0' }}>
              {/* Quick Links */}
              <div>
                <h3 className="text-blue-600 tracking-wider text-sm sm:text-base mb-4 sm:mb-5 font-bold uppercase">Quick Links</h3>
                <ul className="space-y-2.5 sm:space-y-3 text-gray-700 text-sm sm:text-base font-medium">
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Home</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">About Carla</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Shop</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Free Gifts</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Transformation Programs</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Mission & Vision</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-200">Contact</a>
                  </li>
                </ul>
              </div>
              
              {/* Social */}
              <div>
                <h3 className="text-blue-600 tracking-wider text-sm sm:text-base mb-4 sm:mb-5 font-bold uppercase">Social</h3>
                <div className="pb-16 sm:pb-20 md:pb-24 lg:pb-28">
                <a 
                  href="mailto:carlamarcoshypnotherapy@gmail.com" 
                    className="text-gray-700 text-sm sm:text-base font-medium hover:text-purple-600 transition-colors duration-200 block break-all"
                >
                  carlamarcoshypnotherapy@gmail.com
                </a>
                </div>
                <div className="flex gap-6 sm:gap-7 md:gap-8 items-center pt-2 sm:pt-3">
                  <a 
                    href="#" 
                    className="hover:opacity-80 transition-opacity duration-200 flex items-center"
                    aria-label="TikTok"
                  >
                    <img src={tiktokIcon} alt="TikTok" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain" style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} />
                  </a>
                  <a 
                    href="#" 
                    className="hover:opacity-80 transition-opacity duration-200 flex items-center"
                    aria-label="Instagram"
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain" style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} />
                  </a>
                  <a 
                    href="#" 
                    className="hover:opacity-80 transition-opacity duration-200 flex items-center"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain" style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-gray-300/60">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm font-medium">
              <div className="text-center sm:text-left">
                © 2025 Carla Marcos - All rights reserved...
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a href="#" className="hover:text-purple-600 transition-colors duration-200">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="hover:text-purple-600 transition-colors duration-200">Sitemap</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="hover:text-purple-600 transition-colors duration-200">Disclaimer</a>
              </div>
              <div className="hidden md:block text-gray-500">
                Designed and Developed by Katalyst CRM
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}