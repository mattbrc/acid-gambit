import { DashboardCard } from './dashboard-card';
import { ProgramList } from './program-list';
import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { getDate } from '@/utils/helpers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Training() {
  const supabase = createServerComponentClient({
    cookies
  });

  const user = await getUserDetails();
  const currentProgram = user?.current_program;

  const session = await getSession();
  const userId = session?.user.id;
  const date = await getDate();

  const { data: programs } = await supabase.from('programs').select('*');

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Training" text="Start/View your programs." />
        <DashboardCard
          programs={programs}
          program={user?.current_program || null}
          date={date}
        />
        {currentProgram ? (
          <div>
            <p>active program</p>
          </div>
        ) : (
          <div>
            <ProgramList />
            <pre>{JSON.stringify(programs, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
