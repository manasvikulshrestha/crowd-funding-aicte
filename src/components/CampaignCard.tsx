import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
  onClick: () => void;
}

export function CampaignCard({ campaign, onClick }: CampaignCardProps) {
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>
        
        <div className="space-y-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-gray-900">${campaign.raised.toLocaleString()}</p>
              <p className="text-gray-500">raised of ${campaign.goal.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{campaign.daysLeft}</p>
              <p className="text-gray-500">days left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}