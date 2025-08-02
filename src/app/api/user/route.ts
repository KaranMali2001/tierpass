import { Tier } from '@/types/tier-types';
import { ClerkUserCreatedEvent } from '@/types/user-type';
import { ClerkClient } from '@/utils/clerkClient';
import { supabase } from '@/utils/supabase';
import { auth } from '@clerk/nextjs/server';
import { verifyWebhook, WebhookEvent } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const evt = (await verifyWebhook(req)) as WebhookEvent;

    if (evt.type === 'user.created') {
      const userEvent = evt as unknown as ClerkUserCreatedEvent; // Safe cast after narrowing
      const { id } = userEvent.data;

      const { data, error } = await supabase.from('users').insert({
        clerk_id: id,
        email: userEvent.data.email_addresses[0].email_address,
      });

      if (error) {
        console.error('Error inserting user:', error);
        return new Response('Error inserting user', { status: 500 });
      }
      await ClerkClient.users.updateUser(id, {
        publicMetadata: {
          tier: Tier.free,
        },
      });
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}
export async function PUT(req: NextRequest) {
  const { userId } = await auth();
  const { tier } = await req.json();
  try {
    if (!Object.values(Tier).includes(tier)) {
      return new Response('Invalid tier value', { status: 400 });
    }

    if (!userId) return new Response('Unauthorized', { status: 401 });

    await ClerkClient.users.updateUser(userId, {
      publicMetadata: {
        tier: tier,
      },
    });
    return new Response('User tier updated successfully', { status: 200 });
  } catch (error) {
    console.error('Error updating user tier:', error);
    return new Response('Error updating user tier', { status: 500 });
  }
}
