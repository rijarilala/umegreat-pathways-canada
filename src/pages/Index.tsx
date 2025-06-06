import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import ImmigrationSection from "@/components/home/ImmigrationSection";
import PacksSection from "@/components/home/PacksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";

const Index = () => {
  return (
    <MainLayout>
      {/* New Hero Section with Visrox-inspired design */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-blue-600 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero content */}
        <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left content */}
            <div className="text-white space-y-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MEILLEUR ACCOMPAGNEMENT PROFESSIONNEL
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Expertise et Accompagnement 
                  <span className="block text-white/90 relative">
                    Pour Votre
                    <span className="relative inline-block ml-4">
                      <span className="relative z-10">Réussite</span>
                      <div className="absolute bottom-2 left-0 w-full h-4 bg-secondary/30 rounded"></div>
                    </span>
                  </span>
                  <span className="block text-white/90">
                    Professionnelle et 
                    <span className="text-secondary"> Mobilité</span>
                  </span>
                </h1>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Commencer Maintenant
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  En Savoir Plus
                </button>
              </div>
            </div>

            {/* Right content - Professional image */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                
                {/* Main image container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Expert Professionnel</h3>
                      <p className="text-white/80">Accompagnement personnalisé pour votre réussite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/30 rounded-full blur-md animate-pulse delay-500"></div>
      </section>

      {/* Keep existing sections */}
      <FeaturedServices />
      <ImmigrationSection />
      <PacksSection />
      <TestimonialsSection />
      <FaqPreview />
    </MainLayout>
  );
};

export default Index;
