
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  image?: string;
}

const TestimonialCard = ({ name, title, content, image }: TestimonialCardProps) => {
  return (
    <Card className="hover-card h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <svg className="h-10 w-10 text-secondary opacity-20 absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            {image ? (
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img src={image} alt={name} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <CardDescription>{title}</CardDescription>
          </div>
        </div>
        <p className="text-gray-600 italic">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
