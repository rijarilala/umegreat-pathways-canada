
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-blue-700/95 z-10"></div>
        <img 
          src="/lovable-uploads/67db002d-dbba-46b0-a0f4-e256b7e0aaf3.png" 
          alt="Personnes en route vers leur avenir" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left text-white space-y-6">
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              UMEGREAT Pro
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ensemble vers la vie que vous méritez
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Nous vous accompagnons dans votre orientation professionnelle,
              votre formation, votre coaching et votre immigration au Canada.
            </p>
            
            {/* Search prompt */}
            <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Trouvez rapidement nos services
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Main illustration area */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Journey illustration */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Votre parcours avec nous</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <span className="text-white/90">Consultation personnalisée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <span className="text-white/90">Plan d'action sur mesure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <span className="text-white/90">Accompagnement continu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <span className="text-white/90">Réussite de vos objectifs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating success elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              ✓ Expertise Canada
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/30 rounded-full blur-md animate-pulse delay-500"></div>
    </div>
  );
};

export default HeroSection;
