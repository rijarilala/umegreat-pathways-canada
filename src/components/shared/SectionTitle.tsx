
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-10", 
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
