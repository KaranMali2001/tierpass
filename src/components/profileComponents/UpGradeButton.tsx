'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Crown, Loader2 } from 'lucide-react';

interface UpgradeButtonProps {
  currentTier: string;
  onUpgrade: (tier: string) => Promise<void>;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function UpgradeButton({
  currentTier,
  onUpgrade,
  disabled,
  isLoading,
}: UpgradeButtonProps) {
  const tiers = [
    { value: 'silver', label: 'Silver', icon: '🥈', price: '$9.99/month' },
    { value: 'gold', label: 'Gold', icon: '🥇', price: '$19.99/month' },
    { value: 'platinum', label: 'Platinum', icon: '💎', price: '$29.99/month' },
  ];

  const availableTiers = tiers.filter((tier) => {
    const tierLevels = { free: 0, silver: 1, gold: 2, platinum: 3 };
    return (
      tierLevels[tier.value as keyof typeof tierLevels] >
      tierLevels[currentTier as keyof typeof tierLevels]
    );
  });

  const handleUpgrade = async (tier: string) => {
    try {
      await onUpgrade(tier);
    } catch (error) {
      console.error('Upgrade failed:', error);
    }
  };

  if (availableTiers.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          disabled={disabled || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Upgrading...
            </>
          ) : (
            <>
              <Crown className="h-4 w-4 mr-2" />
              Upgrade Tier
              <ChevronDown className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {availableTiers.map((tier) => (
          <DropdownMenuItem
            key={tier.value}
            onClick={() => handleUpgrade(tier.value)}
            className="flex items-center justify-between p-3 cursor-pointer"
            disabled={isLoading}
          >
            <div className="flex items-center gap-2">
              <span>{tier.icon}</span>
              <div>
                <div className="font-medium">{tier.label}</div>
                <div className="text-xs text-gray-500">{tier.price}</div>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
