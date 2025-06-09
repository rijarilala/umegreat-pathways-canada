
interface ServiceBannerProps {
  title: string;
  description?: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  color?: "primary" | "secondary";
}

const ServiceBanner = ({
  title,
  description,
  subtitle,
  badge,
  backgroundImage,
  color = "primary"
}: ServiceBannerProps) => {
  return (
    <div 
      className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${
        backgroundImage ? 'text-white' : color === "primary" ? 'bg-primary text-white' : 'bg-secondary text-white'
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${color === "primary" ? 'bg-primary/80' : 'bg-secondary/80'}`}></div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          {(description || subtitle) && (
            <p className="text-lg md:text-xl opacity-90">
              {description || subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
