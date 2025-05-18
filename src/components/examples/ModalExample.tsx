
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ResponsiveModal from "@/components/shared/ResponsiveModal";

const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Sample content with enough text to trigger scrolling
  const generateLongContent = () => {
    return Array(10).fill(0).map((_, index) => (
      <div key={index} className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Section {index + 1}</h4>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod 
          metus vel risus commodo, a venenatis nunc tincidunt. Vivamus sed
          bibendum arcu, id condimentum nibh. Proin non felis at mauris pulvinar
          cursus eget ac tortor.
        </p>
      </div>
    ));
  };

  return (
    <div className="p-4">
      <Button onClick={openModal}>Ouvrir la modal avec défilement</Button>

      <ResponsiveModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Exemple de Modal avec Indicateur de Défilement"
        description="Cette modal démontre l'indicateur de défilement qui disparaît lors du scroll"
        headerImage="/placeholder.svg"
      >
        {generateLongContent()}
      </ResponsiveModal>
    </div>
  );
};

export default ModalExample;
