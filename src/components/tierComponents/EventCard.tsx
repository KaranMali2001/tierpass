'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ExternalLink, Lock, MapPin, Star, Users } from 'lucide-react';
import { useState } from 'react';

// TierBadge component
const TierBadge = ({ tier }: { tier: 'free' | 'premium' }) => {
  return (
    <Badge
      variant={tier === 'premium' ? 'default' : 'secondary'}
      className={`
        text-xs font-medium px-2.5 py-1 rounded-md border-0
        ${
          tier === 'premium'
            ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25'
            : 'bg-zinc-700 text-zinc-200 shadow-sm'
        }
      `}
    >
      {tier === 'premium' && <Star className="h-3 w-3 mr-1" />}
      {tier.charAt(0).toUpperCase() + tier.slice(1)}
    </Badge>
  );
};

// Simplified type definition for demonstration
type eventType = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string | null;
  tier: 'free' | 'premium';
};

interface EventCardProps {
  event: eventType;
  accessible: boolean;
}

export default function ProfessionalEventCard({ event, accessible }: EventCardProps) {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
  };

  const { date, time } = formatDate(event.event_date);
  const isUpcoming = new Date(event.event_date) > new Date();
  const attendeeCount = Math.floor(Math.random() * 150) + 25;

  return (
    <Card
      className={`
        group overflow-hidden transition-all duration-300 
        bg-zinc-900 border border-zinc-800 shadow-xl shadow-black/20
        ${
          accessible
            ? 'hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30 cursor-pointer'
            : 'opacity-90 relative'
        }
      `}
    >
      {!accessible && (
        <div className="absolute inset-0 bg-black/70 z-20 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-zinc-900/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-2xl border border-zinc-700 max-w-xs mx-4 ring-1 ring-white/10">
            <div className="h-14 w-14 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Lock className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Premium Event</h3>
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Upgrade your membership to access this exclusive content
            </p>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 border-0"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      )}

      {/* Event Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {!imageError ? (
          <img
            src={
              event.image_url ||
              'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center'
            }
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="text-center text-zinc-500">
              <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Event Image</p>
            </div>
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          <TierBadge tier={event.tier} />
          {accessible && isUpcoming && (
            <Badge className="bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs px-2.5 py-1 border-0 shadow-lg shadow-emerald-500/25">
              Available
            </Badge>
          )}
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Clear Separator Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-5">
          <CardTitle className="text-xl font-semibold text-white mb-3 line-clamp-2 leading-tight group-hover:text-zinc-200 transition-colors">
            {event.title}
          </CardTitle>
          <CardDescription className="text-zinc-400 line-clamp-3 leading-relaxed text-sm">
            {event.description}
          </CardDescription>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <span className="font-medium text-white">{date}</span>
              <span className="text-zinc-400 ml-2">{time}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="text-zinc-300">Online Workshop</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
              <Users className="h-4 w-4 text-violet-400" />
            </div>
            <span className="text-zinc-300">{attendeeCount} registered</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className={`
            w-full h-11 font-medium transition-all duration-200 border-0
            ${
              accessible
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/30'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed hover:bg-zinc-800 border border-zinc-700'
            }
          `}
          disabled={!accessible}
        >
          {accessible ? (
            <>
              <ExternalLink className="h-4 w-4 mr-2" />
              {isUpcoming ? 'Register Now' : 'View Recording'}
            </>
          ) : (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Upgrade Required
            </>
          )}
        </Button>

        {/* Footer Status */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock className="h-3 w-3" />
            <span className="font-medium">{isUpcoming ? 'Upcoming Event' : 'Past Event'}</span>
          </div>
          <div className="text-xs text-zinc-500 font-medium capitalize">{event.tier} Tier</div>
        </div>
      </div>
    </Card>
  );
}
