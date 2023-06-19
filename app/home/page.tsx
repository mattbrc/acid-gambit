import { UserCard } from './components/user-card';
import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TrainingCard } from './components/training-card';
import { LearnCard } from './components/learn-card';
import { WodCard } from './components/wod-card';

export default async function Dashboard() {
  const supabase = createServerComponentClient({
    cookies
  });

  const subscription = await getSubscription();
  const session = await getSession();
  const user = await getUserDetails();
  const { data } = await supabase
    .from('user_training')
    .select('completed_workouts')
    .eq('id', user?.id)
    .single();

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Home" text="Your training home." />
      </div>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <UserCard
        name={user?.full_name || null}
        email={session?.user.email || ''}
        subscription={subscription?.prices?.products?.name}
        workouts={data?.completed_workouts || null}
      />
      <TrainingCard program={user?.current_program || null} />
      <WodCard />
      <LearnCard />
    </div>
  );
}
