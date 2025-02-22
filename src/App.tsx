import React, { useState } from 'react';
import { Campaign, DonationTier } from './types';
import { CampaignCard } from './components/CampaignCard';
import { DonationTiers } from './components/DonationTiers';
import { Search, TrendingUp } from 'lucide-react';

// Sample data
const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Save the Local Theater',
    description: 'Help us renovate and preserve our historic community theater that has been bringing arts and culture to our town for over 50 years.',
    goal: 50000,
    raised: 32500,
    daysLeft: 15,
    imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80',
    creator: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    }
  },
  {
    id: '2',
    title: 'Green Energy Innovation',
    description: 'Supporting the development of new solar panel technology that will make renewable energy more accessible to everyone.',
    goal: 100000,
    raised: 67800,
    daysLeft: 23,
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    creator: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    }
  }
];

const donationTiers: DonationTier[] = [
  {
    id: 'tier1',
    name: 'Supporter',
    amount: 25,
    description: 'Every contribution counts! Get exclusive updates.',
    perks: ['Digital thank you card', 'Project updates', 'Name in credits']
  },
  {
    id: 'tier2',
    name: 'Champion',
    amount: 100,
    description: 'Be a vital part of making this project happen.',
    perks: ['All Supporter perks', 'Limited edition sticker', 'Early access']
  },
  {
    id: 'tier3',
    name: 'Hero',
    amount: 500,
    description: 'Make a significant impact on this project.',
    perks: ['All Champion perks', 'Exclusive merchandise', 'VIP event access']
  }
];

function App() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">CrowdFund</span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedCampaign ? (
          <div className="space-y-8">
            <button
              onClick={() => setSelectedCampaign(null)}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to all campaigns
            </button>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedCampaign.imageUrl}
                  alt={selectedCampaign.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-6 prose max-w-none">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedCampaign.title}
                  </h1>
                  <p className="text-gray-600">{selectedCampaign.description}</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="space-y-4">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>${selectedCampaign.raised.toLocaleString()}</span>
                      <span className="text-gray-500">
                        of ${selectedCampaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{
                          width: `${Math.min(
                            (selectedCampaign.raised / selectedCampaign.goal) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{selectedCampaign.daysLeft} days left</span>
                      <span>
                        {Math.round(
                          (selectedCampaign.raised / selectedCampaign.goal) * 100
                        )}% funded
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Select a Tier</h2>
                  <DonationTiers
                    tiers={donationTiers}
                    onSelect={(tier) => {
                      // Handle donation
                      alert(`Selected ${tier.name} tier - $${tier.amount}`);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Campaigns
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  onClick={() => setSelectedCampaign(campaign)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;