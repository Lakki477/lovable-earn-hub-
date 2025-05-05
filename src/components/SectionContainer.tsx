
import React from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  tagline?: string;
  children: React.ReactNode;
  background?: string;
}

const SectionContainer = ({
  id,
  title,
  tagline,
  children,
  background = 'bg-white',
}: SectionContainerProps) => {
  return (
    <section id={id} className={`${background} py-12 md:py-16`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">{title}</span>
          </h2>
          {tagline && <p className="text-gray-600 max-w-2xl mx-auto">{tagline}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
