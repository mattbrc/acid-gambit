import { UserCard } from './user-card';
import UserDashboard from './user-dashboard';
import { getSession, getSubscription } from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerComponentClient({
    cookies
  });

  const subscription = await getSubscription();
  const session = await getSession();
  const userId = session?.user.id;
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', userId);

  // user dash
  // get user
  // active program?
  // display profile card
  // browse programs / view active program card
  // learn / training knowledge base

  return (
    <div>
      <DashboardHeader heading="Home" text="Your training home." />
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <pre>{JSON.stringify(subscription?.status, null, 2)}</pre>
      <UserCard />
      <p>Start a training program</p>
      <p>Learn</p>
      <p>Training Resources</p>
      <p>Workout of the Day</p>
    </div>
  );
}
