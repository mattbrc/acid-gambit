import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DashboardCard } from './dashboard-card';
import { ProgramList } from './program-list';

export default async function Training() {
  const supabase = createServerComponentClient({
    cookies
  });

  const user = await getUserDetails();
  const currentProgram = user?.current_program;

  const session = await getSession();
  const userId = session?.user.id;
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', userId);

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Training" text="Start/View your programs." />
        <DashboardCard program={user?.current_program || null} />
        {currentProgram ? (
          <div>
            <p>active program</p>
          </div>
        ) : (
          <ProgramList />
        )}
      </div>
    </div>
  );
}
