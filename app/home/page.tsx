import { UserCard } from './components/user-card';
import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { redirect } from 'next/navigation';
import { TrainingCard } from './components/training-card';
import { LearnCard } from './components/learn-card';
import { WodCard } from './components/wod-card';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types_db';
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({
    cookies
  });

  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const { data: activeProgram, error } = await supabase
    .from('user_training')
    .select('*')
    .eq('id', userDetails?.id)
    .single();

  if (error) {
    console.log('error: ', error);
  }

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Home" text="Your training home." />
      </div>
      <TrainingCard program={activeProgram?.active_program_name || null} />
      <WodCard />
      <LearnCard />
    </div>
  );
}
