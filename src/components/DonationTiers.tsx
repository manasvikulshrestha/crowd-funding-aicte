import React from 'react';
import { DonationTier } from '../types';
import { Check } from 'lucide-react';

interface DonationTiersProps {
  tiers: DonationTier[];
  onSelect: (tier: DonationTier) => void;
}

export function DonationTiers({ tiers, onSelect }: DonationTiersProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div 
          key={tier.id}
          className="border rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer"
          onClick={() => onSelect(tier)}
        >
          <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
          <p className="text-3xl font-bold mb-4">${tier.amount}</p>
          <p className="text-gray-600 mb-4">{tier.description}</p>
          <ul className="space-y-2">
            {tier.perks.map((perk, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}