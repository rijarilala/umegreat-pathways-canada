
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";

const AboutUs = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="À propos de nous" 
        description="Découvrez l'équipe et la mission derrière UMEGREAT Pro"
        color="primary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200" 
                  alt="UMEGREAT Pro Team" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Notre histoire" 
                subtitle="Comment UMEGREAT Pro est né d'une vision simple mais ambitieuse"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  UMEGREAT Pro a été fondé par une équipe de professionnels passionnés par l'accompagnement 
                  et le développement des talents. Notre mission est d'aider chaque individu à atteindre son plein 
                  potentiel et à construire la vie qu'il mérite.
                </p>
                <p>
                  Nous avons débuté comme cabinet d'orientation professionnelle, puis avons progressivement étendu 
                  nos services pour répondre de manière plus complète aux besoins de nos clients. Aujourd'hui, 
                  nous offrons une gamme complète de services, de l'orientation professionnelle à l'immigration au Canada.
                </p>
                <p>
                  Ce qui nous distingue, c'est notre approche personnalisée et notre engagement envers la réussite 
                  de chacun de nos clients. Nous ne nous contentons pas de fournir des services; nous créons des 
                  partenariats durables basés sur la confiance et l'expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre mission" 
            subtitle="Ce qui nous motive chaque jour"
            centered
          />
          
          <div className="max-w-3xl mx-auto text-center text-gray-600 mt-6">
            <p className="text-lg mb-6">
              Notre mission est d'accompagner les individus dans leur développement professionnel et personnel, 
              en leur fournissant les outils, connaissances et opportunités nécessaires pour réussir, 
              que ce soit dans leur pays d'origine ou au Canada.
            </p>
            <p className="text-lg">
              Nous croyons fermement que chaque personne mérite d'avoir accès à des opportunités qui lui permettent 
              d'exploiter pleinement son potentiel, et nous nous engageons à être le partenaire de confiance qui 
              les aide à y parvenir.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos valeurs" 
            subtitle="Les principes qui guident notre travail quotidien"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos services, en nous tenant constamment informés des dernières 
                tendances et exigences dans nos domaines d'expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intégrité</h3>
              <p className="text-gray-600">
                Nous travaillons avec transparence et honnêteté, en plaçant toujours les intérêts de nos clients 
                au centre de nos préoccupations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous cherchons constamment à améliorer nos méthodes et à développer de nouvelles solutions 
                pour mieux servir nos clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Empathie</h3>
              <p className="text-gray-600">
                Nous comprenons les défis et les aspirations de nos clients, et nous adaptons notre approche 
                à leurs besoins spécifiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Engagement</h3>
              <p className="text-gray-600">
                Nous nous engageons pleinement dans la réussite de chaque projet, en fournissant un 
                accompagnement continu et personnalisé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversité</h3>
              <p className="text-gray-600">
                Nous valorisons et célébrons la diversité des parcours, des cultures et des perspectives, 
                ce qui enrichit notre travail et nos relations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
