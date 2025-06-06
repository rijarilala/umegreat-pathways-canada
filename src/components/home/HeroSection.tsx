
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-blue-700 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-8 max-w-4xl">
          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            UMEGREAT Pro
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ensemble vers la vie que vous méritez
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Nous vous accompagnons dans votre orientation professionnelle,
            votre formation, votre coaching et votre immigration au Canada.
          </p>
          
          {/* Search prompt */}
          <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Trouvez rapidement nos services
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/30 rounded-full blur-md animate-pulse delay-500"></div>
    </div>
  );
};

export default HeroSection;
