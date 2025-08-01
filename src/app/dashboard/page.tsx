import EventsPage from '@/components/tierComponents/dashboard';
import { Tier, tierMap } from '@/types/tier-types';
import { ClerkClient } from '@/utils/clerkClient';
import { supabase } from '@/utils/supabase';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const authUser = await auth();
  if (!authUser.userId) {
    return redirect('/sign-in');
  }
  const user = await ClerkClient.users.getUser(authUser.userId);

  const { data: events, error } = await supabase.from('events').select('*');
  if (error || !events) {
    console.log('error', error);
    return <div>Eror fetching events</div>;
  }
  const totalEventLen = events.length;
  const userAccessiableEvents = events.filter(
    //@ts-ignore
    (event) => event.Tier_Level! <= tierMap[user.publicMetadata.tier as Tier],
  );
  console.log('userAccessiableEvents', userAccessiableEvents);
  console.log('TOTAL', totalEventLen);
  return (
    <div>
      <EventsPage
        events={userAccessiableEvents}
        totalEvents={totalEventLen}
        userTier={user.publicMetadata.tier as Tier}
      />
    </div>
  );
}
