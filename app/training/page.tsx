import { getSession, getSubscription } from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { getDate } from '@/utils/helpers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Wod() {
  const supabase = createServerComponentClient({
    cookies
  });

  const date = await getDate();

  const subscription = await getSubscription();
  const session = await getSession();
  const userId = session?.user.id;
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', userId);

  const name = profile?.[0]?.full_name || profile?.[0].username || '';

  // user dash
  // get user
  // active program?
  // display profile card
  // browse programs / view active program card
  // learn / training knowledge base

  return (
    <div>
      <p>hello</p>
    </div>
  );
}
