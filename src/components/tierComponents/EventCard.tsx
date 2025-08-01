import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Database as supabaseDB } from '@/types/database';
import { Calendar, Clock, ExternalLink, Lock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import TierBadge from './TierBadge';

type eventType = supabaseDB['public']['Tables']['events']['Row'];

interface EventCardProps {
  event: eventType;
  accessible: boolean;
}

export default function EventCard({ event, accessible }: EventCardProps) {
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

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
        accessible
          ? 'hover:scale-[1.02] cursor-pointer border-l-4 border-l-blue-500'
          : 'opacity-75 relative border-l-4 border-l-gray-300'
      }`}
    >
      {!accessible && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border">
            <Lock className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <p className="text-sm font-semibold text-gray-800 mb-1">Premium Event</p>
            <p className="text-xs text-gray-600">Upgrade to access</p>
          </div>
        </div>
      )}

      {/* Event Image */}
      <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <Image
          src={event.image_url || '/placeholder.svg?height=200&width=400'}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <TierBadge tier={event.tier} />
          {accessible && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
              Available
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg sm:text-xl leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
            {event.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-medium">{date}</span>
              <span className="text-xs sm:text-sm text-gray-500">{time}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="truncate">Online Workshop</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users className="h-4 w-4 text-purple-500 flex-shrink-0" />
            <span>{Math.floor(Math.random() * 50) + 10} attending</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            className={`w-full transition-all duration-200 ${
              accessible
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!accessible}
            size="sm"
          >
            {accessible ? (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                Register Now
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Upgrade to Access
              </>
            )}
          </Button>
        </div>

        {/* Event Status */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {new Date(event.event_date) > new Date() ? 'Upcoming' : 'Past Event'}
          </span>
          <span className="capitalize font-medium">{event.tier} tier</span>
        </div>
      </CardContent>
    </Card>
  );
}
