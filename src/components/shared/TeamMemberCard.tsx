
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const TeamMemberCard = ({ name, title, image, description }: TeamMemberCardProps) => {
  return (
    <Card className="hover-card overflow-hidden h-full group">
      <div className="relative">
        <div className="h-64 w-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-secondary font-medium">{title}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
