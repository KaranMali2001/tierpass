'use client';

import EventCard from '@/components/tierComponents/EventCard';
import TierBadge from '@/components/tierComponents/TierBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type { Database as supabaseDB } from '@/types/database';
import { Tier } from '@/types/tier-types';
import { Bell, Calendar, Filter, Search, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type eventType = supabaseDB['public']['Tables']['events']['Row'];

export default function EventsPage({
  events,
  userTier,
}: {
  events: eventType[];
  totalEvents: number;
  userTier: Tier;
}) {
  const [selectedFilter, setSelectedFilter] = useState<Tier>(Tier.all);
  const [searchQuery, setSearchQuery] = useState('');

  // Client-side filtering of events
  const filteredAndSearchedEvents = useMemo(() => {
    let filtered = events;

    // Filter by tier
    if (selectedFilter !== 'all') {
      filtered = filtered.filter((event) => event.tier === selectedFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [events, selectedFilter, searchQuery]);

  const tierOptions = ['all', 'free', 'silver', 'gold', 'platinum'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Professional Header with Navigation */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand & Title */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl shadow-lg">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Events</h1>
                  <p className="text-sm text-slate-600 font-medium">
                    Professional Event Management
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation & User Info */}
            <div className="flex items-center gap-4">
              {/* Membership Status */}
              <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                <span className="text-sm font-semibold text-slate-700">Membership</span>
                <TierBadge tier={userTier} />
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                >
                  <Bell className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 gap-2"
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline font-medium">Profile</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Advanced Search & Filter Panel */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="space-y-6 pt-6">
            {/* Enhanced Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search events by title, description, keywords, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500 rounded-xl text-base shadow-sm"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  ×
                </Button>
              )}
            </div>

            {/* Professional Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Filter className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-base font-bold text-slate-900">
                  Filter by Membership Tier
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {tierOptions.map((tier) => (
                  <Button
                    key={tier}
                    variant={selectedFilter === tier ? 'default' : 'outline'}
                    size="sm"
                    //@ts-ignore
                    onClick={() => setSelectedFilter(Tier[tier])}
                    className={`capitalize px-4 py-2 font-semibold transition-all duration-200 ${
                      selectedFilter === tier
                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                    }`}
                  >
                    {tier === 'all'
                      ? 'All Tiers'
                      : `${tier.charAt(0).toUpperCase() + tier.slice(1)} Tier`}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search Results Summary */}
            {(searchQuery || selectedFilter !== 'all') && (
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex gap-2">
                  {searchQuery && (
                    <Button variant="outline" size="sm" onClick={() => setSearchQuery('')}>
                      Clear Search
                    </Button>
                  )}
                  {selectedFilter !== Tier.all && (
                    <Button variant="outline" size="sm" onClick={() => setSelectedFilter(Tier.all)}>
                      Reset Filter
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Events Catalog */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-900">Event Catalog</span>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    Showing {filteredAndSearchedEvents.length} of {events.length} available events
                  </p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            {filteredAndSearchedEvents.length === 0 ? (
              <div className="text-center py-16">
                <div className="p-6 bg-slate-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No Events Found</h3>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                  {searchQuery
                    ? "We couldn't find any events matching your search criteria. Try adjusting your search terms or filters to discover more events."
                    : 'No events are currently available for the selected membership tier. Consider upgrading your membership to access more exclusive events.'}
                </p>
                {(selectedFilter !== 'all' || searchQuery) && (
                  <div className="flex gap-4 justify-center">
                    {searchQuery && (
                      <Button
                        variant="outline"
                        onClick={() => setSearchQuery('')}
                        className="px-6 py-3 font-semibold"
                      >
                        Clear Search
                      </Button>
                    )}
                    {selectedFilter !== Tier.all && (
                      <Button
                        variant="outline"
                        onClick={() => setSelectedFilter(Tier.all)}
                        className="px-6 py-3 font-semibold"
                      >
                        Show All Tiers
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`}>
                {filteredAndSearchedEvents.map((event) => (
                  //@ts-ignore
                  <EventCard key={event.id} event={event} accessible={true} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
