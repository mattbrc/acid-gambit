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

  const session = await getSession();
  const userId = session?.user.id;
  const date = await getDate();

  const { data: programs } = await supabase
    .from('programs')
    .select('*')
    .order('id', { ascending: true });

  // fetch user's active program and program name from relation
  // const { data: program, error } = await supabase
  //   .from('user_training')
  //   .select(
  //     `
  //   active_program,
  //   programs:active_program (
  //     program_name
  //   )
  // `
  //   )
  //   .eq('id', userId)
  //   .single();

  const { data: activeProgram, error } = await supabase
    .from('user_training')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.log('error: ', error);
  }

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader
          heading="Training"
          text="Start/View your programs. Work in progress."
        />
        <DashboardCard program={activeProgram!} date={date} />
        <div>
          {programs ? (
            <ProgramList programs={programs} id={userId} />
          ) : (
            <div>
              <p>Error. No programs available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
