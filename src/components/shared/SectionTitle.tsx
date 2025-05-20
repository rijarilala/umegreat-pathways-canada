import React, { ReactNode } from "react";
interface SectionTitleProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = ""
}: SectionTitleProps) => {
  return <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      {typeof title === 'string' ? <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2> : title}
      {subtitle && <p className="text-gray-600 text-lg px-[129px]">{subtitle}</p>}
    </div>;
};
export default SectionTitle;