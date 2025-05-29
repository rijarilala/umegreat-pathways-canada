
import React, { ReactNode } from "react";

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  variant?: 'default' | 'gradient' | 'modern';
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = "",
  variant = 'default'
}: SectionTitleProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent';
      case 'modern':
        return 'relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      {typeof title === 'string' ? (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${centered ? 'text-center' : ''} ${getVariantClasses()}`}>
          {title}
        </h2>
      ) : (
        <div className={`mb-4 ${getVariantClasses()}`}>
          {title}
        </div>
      )}
      {subtitle && (
        <p className={`text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
