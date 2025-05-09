
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#87CEEB] to-white">
          {/* SVG Illustration */}
          <svg
            className="w-full h-full opacity-90"
            viewBox="0 0 1200 675" // 16:9 ratio
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Globe */}
            <circle cx="600" cy="337.5" r="200" fill="#87CEEB" opacity="0.8" />
            <circle cx="600" cy="337.5" r="190" fill="white" opacity="0.3" />
            <ellipse cx="600" cy="337.5" rx="200" ry="80" fill="#87CEEB" opacity="0.5" />
            <line x1="400" y1="337.5" x2="800" y2="337.5" stroke="white" strokeWidth="2" strokeDasharray="10 5" />
            <line x1="600" y1="137.5" x2="600" y2="537.5" stroke="white" strokeWidth="2" strokeDasharray="10 5" />
            
            {/* Compass (Orientation) */}
            <circle cx="400" cy="180" r="70" fill="white" opacity="0.9" />
            <path d="M400 140 L390 170 L400 160 L410 170 Z" fill="#FFA500" />
            <path d="M400 220 L390 190 L400 200 L410 190 Z" fill="#87CEEB" />
            <path d="M360 180 L390 190 L380 180 L390 170 Z" fill="#87CEEB" />
            <path d="M440 180 L410 190 L420 180 L410 170 Z" fill="#87CEEB" />
            <circle cx="400" cy="180" r="5" fill="#FFA500" />
            
            {/* Book (Formation) */}
            <rect x="760" y="170" width="100" height="80" rx="5" fill="white" />
            <path d="M760 170 L810 150 L860 170" stroke="#87CEEB" strokeWidth="3" fill="none" />
            <path d="M810 150 L810 230" stroke="#87CEEB" strokeWidth="1" />
            <line x1="810" y1="180" x2="855" y2="180" stroke="#FFA500" strokeWidth="2" />
            <line x1="810" y1="190" x2="855" y2="190" stroke="#FFA500" strokeWidth="2" />
            <line x1="810" y1="200" x2="850" y2="200" stroke="#FFA500" strokeWidth="2" />
            
            {/* Handshake (Coaching) */}
            <circle cx="450" cy="470" r="70" fill="white" opacity="0.9" />
            <path d="M410 470 C420 460, 430 450, 450 450 C470 450, 480 460, 490 470" stroke="#87CEEB" strokeWidth="6" strokeLinecap="round" />
            <path d="M410 470 C420 480, 430 490, 450 490 C470 490, 480 480, 490 470" stroke="#FFA500" strokeWidth="6" strokeLinecap="round" />
            
            {/* Graduation Cap & Passport (Immigration & Études) */}
            <circle cx="750" cy="470" r="70" fill="white" opacity="0.9" />
            <rect x="720" y="460" width="60" height="40" rx="3" fill="#87CEEB" />
            <path d="M715 460 L750 440 L785 460 L750 480 Z" fill="#FFA500" />
            <circle cx="750" cy="440" r="5" fill="white" />
            <rect x="745" y="440" width="10" height="30" fill="#FFA500" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            UMEGREAT Pro
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ensemble vers la vie que vous méritez
          </p>
          <p className="text-base md:text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Nous vous accompagnons dans votre orientation professionnelle, 
            votre formation, votre coaching et votre immigration au Canada.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-white" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
