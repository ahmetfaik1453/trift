import React from 'react';
import { formatCurrency } from '../../../utils/formatters';

interface CountryCardProps {
  country: string;
  flag: string;
  rate: string;
  image: string;
}

export default function CountryCard({ country, flag, rate, image }: CountryCardProps) {
  const getCurrencyCode = (countryName: string) => {
    switch (countryName) {
      case 'Azerbaijan': return 'AZN';
      case 'Turkey': return 'TRY';
      case 'United Kingdom': return 'GBP';
      default: return 'USD';
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
      <img 
        src={image} 
        alt={country}
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{flag}</span>
          <h3 className="font-semibold">{country}</h3>
        </div>
        <p className="text-sm text-gray-200">
          1 USD = {rate} {getCurrencyCode(country)}
        </p>
      </div>
    </div>
  );
}
