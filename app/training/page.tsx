import { DashboardCard } from './dashboard-card';
import { ProgramList } from './program-list';
import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { Database } from '@/types_db';
import { getDate } from '@/utils/helpers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Training() {
  const supabase = createServerComponentClient<Database>({
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
        <DashboardCard program={user?.current_program || null} date={date} />
        {currentProgram ? (
          <div>
            <p>active program</p>
          </div>
        ) : (
          <div>
            {programs ? (
              <ProgramList programs={programs} />
            ) : (
              <div>
                <p>no programs</p>
              </div>
            )}
            <pre>{JSON.stringify(programs, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
