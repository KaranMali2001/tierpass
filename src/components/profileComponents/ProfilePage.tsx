'use client';

import UpgradeButton from '@/components/profileComponents/UpGradeButton';
import TierBadge from '@/components/tierComponents/TierBadge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { eventType } from '@/types/event-type';
import { SerializableUser } from '@/types/user-type';

import { Tier } from '@/types/tier-types';
import { AlertCircle, Calendar, CheckCircle, Crown, Loader2, Mail, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProfilePage({
  user,
  accessibleEvent,
  restricted_event,
}: {
  user: SerializableUser;
  accessibleEvent: eventType[];
  restricted_event: eventType[];
}) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [currentTier, setCurrentTier] = useState<Tier>(
    (user?.publicMetadata.tier as Tier) || Tier.free,
  );

  const handleTierUpdate = async (tier: string) => {
    setIsUpdating(true);
    setUpdateError(null);
    setUpdateSuccess(false);

    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tier }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to update user tier: ${response.status} ${response.statusText}`,
        );
      }

      setCurrentTier(tier as Tier);
      setUpdateSuccess(true);
      router.refresh();
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating tier:', error);
      setUpdateError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsUpdating(false);
    }
  };

  const clearError = () => {
    setUpdateError(null);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">No profile data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

        {/* Success Alert */}
        {updateSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your tier has been successfully updated!
            </AlertDescription>
          </Alert>
        )}

        {/* Error Alert */}
        {updateError && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {updateError}
              <button
                onClick={clearError}
                className="ml-2 text-red-600 underline hover:text-red-800"
              >
                Dismiss
              </button>
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.imageUrl || '/placeholder.svg'} alt={user.fullName || ''} />
                <AvatarFallback>
                  {user?.fullName
                    ?.split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-2xl">{user?.fullName}</CardTitle>
                <CardDescription className="text-base">
                  Member since {user.createdAt}
                </CardDescription>
              </div>
              <TierBadge tier={currentTier} size="lg" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{user.emailAddresses[0].emailAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-500" />
                <span>User ID: {user.id}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span>Joined: {user.createdAt}</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Crown className="h-5 w-5" />
                Membership Tier
                {isUpdating && <Loader2 className="h-4 w-4 animate-spin" />}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Current Tier</p>
                    <p className="text-sm text-gray-600">
                      {currentTier === 'free' && 'Access to basic events'}
                      {currentTier === 'silver' && 'Access to basic and silver events'}
                      {currentTier === 'gold' && 'Access to basic, silver, and gold events'}
                      {currentTier === 'platinum' && 'Access to all premium events'}
                    </p>
                  </div>
                  <TierBadge tier={currentTier} />
                </div>

                {currentTier !== 'platinum' && (
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
                    <h4 className="font-semibold text-purple-900 mb-2">Upgrade Your Experience</h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Unlock {restricted_event.length} exclusive events and premium features with a
                      higher tier membership.
                    </p>
                    {restricted_event && (
                      <p className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded mb-3 inline-block">
                        Preview: "{restricted_event[0].title}"
                      </p>
                    )}
                    <UpgradeButton
                      currentTier={currentTier}
                      onUpgrade={handleTierUpdate}
                      disabled={isUpdating}
                      isLoading={isUpdating}
                    />
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Account Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{accessibleEvent.length}</div>
                  <div className="text-sm text-blue-700">Available Events</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {restricted_event.length}
                  </div>
                  <div className="text-sm text-purple-700">Premium Events</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
