import React from 'react';
import { Globe2 } from 'lucide-react';
import CountryCard from './country/CountryCard';
import { POPULAR_DESTINATIONS } from '../../constants/countries';

export default function CountryGrid() {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Globe2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Popular Destinations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {POPULAR_DESTINATIONS.map((dest) => (
          <CountryCard key={dest.country} {...dest} />
        ))}
      </div>
    </div>
  );
}
