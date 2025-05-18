
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/27929dc8-d730-4fdb-9a0a-4a6f7e7bf026.png" 
          alt="Étudiants marchant vers un campus universitaire" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
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
            <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
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
