
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ImmigrationSection from "@/components/home/ImmigrationSection";
import EtudesSection from "@/components/home/EtudesSection";
import FormationApproachSection from "@/components/home/FormationApproachSection";
import PacksSection from "@/components/home/PacksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      
      <ImmigrationSection />
      <EtudesSection />
      <FormationApproachSection />
      <PacksSection />
      <TestimonialsSection />
      <FaqPreview />
    </MainLayout>
  );
};

export default Index;
