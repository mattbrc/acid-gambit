import { UserCard } from './user-card';
import UserDashboard from './user-dashboard';
import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
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
  const user = await getUserDetails();
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', user?.id);

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Home" text="Your training home." />
      </div>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <UserCard
        name={user?.full_name || null}
        email={session?.user.email || ''}
      />
      <p>Start a training program</p>
      <p>Learn</p>
      <p>Training Resources</p>
      <p>Workout of the Day</p>
    </div>
  );
}
