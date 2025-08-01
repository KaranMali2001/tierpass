import { Badge } from '@/components/ui/badge';

interface TierBadgeProps {
  tier: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TierBadge({ tier, size = 'md' }: TierBadgeProps) {
  const getTierConfig = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'free':
        return {
          label: 'Free',
          className: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
          icon: '🆓',
        };
      case 'silver':
        return {
          label: 'Silver',
          className: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
          icon: '🥈',
        };
      case 'gold':
        return {
          label: 'Gold',
          className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
          icon: '🥇',
        };
      case 'platinum':
        return {
          label: 'Platinum',
          className: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
          icon: '💎',
        };
      default:
        return {
          label: 'Unknown',
          className: 'bg-gray-100 text-gray-800',
          icon: '❓',
        };
    }
  };

  const config = getTierConfig(tier);
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  return (
    <Badge className={`${config.className} ${sizeClasses[size]} font-medium`}>
      <span className="mr-1">{config.icon}</span>
      {config.label}
    </Badge>
  );
}
