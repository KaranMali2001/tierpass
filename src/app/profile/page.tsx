import ProfilePage from '@/components/profileComponents/ProfilePage';
import ErrorPage from '@/components/ui/errorPage';
import { SerializableUser } from '@/types/user-type';
import { ClerkClient } from '@/utils/clerkClient';
import { supabase } from '@/utils/supabase';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const authUser = await auth();
  if (!authUser.userId) {
    return redirect('/sign-in');
  }

  const user = await ClerkClient.users.getUser(authUser.userId);
  if (!user) {
    return redirect('/sign-in');
  }
  const events = await supabase.from('events').select('*');

  if (events.error) {
    return <ErrorPage />;
  }
  const accessibleEvent = events.data.filter((event) => event.tier === user.publicMetadata.tier);
  const restricted_event = events.data.filter((event) => event.tier !== user.publicMetadata.tier);

  const serializedUser: SerializableUser = {
    id: user.id,
    fullName: user.fullName,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    createdAt: user.createdAt,
    emailAddresses: user.emailAddresses.map((email) => ({
      id: email.id,
      emailAddress: email.emailAddress,
    })),
    publicMetadata: user.publicMetadata || {},
  };

  return (
    <div>
      <ProfilePage
        user={serializedUser}
        accessibleEvent={accessibleEvent}
        restricted_event={restricted_event}
      />
    </div>
  );
}
