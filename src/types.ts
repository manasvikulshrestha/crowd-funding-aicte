export interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  daysLeft: number;
  imageUrl: string;
  creator: {
    name: string;
    avatar: string;
  };
}

export interface DonationTier {
  id: string;
  name: string;
  amount: number;
  description: string;
  perks: string[];
}