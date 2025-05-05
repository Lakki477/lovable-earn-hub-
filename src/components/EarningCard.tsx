
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EarningCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  isExternal?: boolean;
}

const EarningCard = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
  bgColor = 'bg-white',
  isExternal = false,
}: EarningCardProps) => {
  return (
    <div className={`${bgColor} rounded-xl shadow-md hover:shadow-lg transition-shadow p-6`}>
      <div className="mb-4 bg-lovable-pink/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExternal ? (
        <Button
          className="w-full bg-lovable-pink hover:bg-lovable-pink-hover text-white"
          onClick={() => window.open(buttonLink, '_blank')}
        >
          {buttonText}
        </Button>
      ) : (
        <Button asChild className="w-full bg-lovable-pink hover:bg-lovable-pink-hover text-white">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      )}
    </div>
  );
};

export default EarningCard;
