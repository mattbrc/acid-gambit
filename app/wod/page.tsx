// import { WorkoutOfTheDay } from './wod';
// import { DashboardHeader } from '@/components/header';
// import { getDate } from '@/utils/helpers';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

// export default async function Wod() {
//   const supabase = createServerComponentClient({
//     cookies
//   });

// const today = new Date(); // use to query for workout for today's date
// const date = await getDate(); // use as title for card
// const formattedDate = `${today.getFullYear()}-${String(
//   today.getMonth() + 1
// ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

// const { data: wod } = await supabase
//   .from('wods')
//   .select('*')
//   .eq('date', formattedDate)
//   .single();

// const { data: userTimes } = await supabase
//   .from('user_completed_wods')
//   .select('*')
//   .eq('wod_id', wod?.id)
//   .single();

// const workoutDetails = {
//   workout: wod?.workout,
//   title: wod?.title,
//   notes: wod?.notes
// };

// const { data: times } = await supabase.from('user_completed_wods').select('*').eq('id', userId).single();

//   return (
//     <div>
//       <div className="pb-2">
//         <DashboardHeader heading="Workout of the Day" text="Start Training" />
//       </div>
//       <WorkoutOfTheDay
//         date={date}
//         workoutDetails={workoutDetails}
//         wodTimes={userTimes || null}
//       />
//       <pre>{JSON.stringify(userTimes, null, 2)}</pre>
//     </div>
//   );
// }

import { DashboardCard } from '../training/dashboard-card';
import { ProgramList } from '../training/program-list';
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
import { WorkoutOfTheDay } from './wod';

export default async function Wod() {
  const supabase = createServerComponentClient<Database>({
    cookies
  });

  const user = await getUserDetails();

  const session = await getSession();
  const userId = session?.user.id;

  const today = new Date(); // use to query for workout for today's date
  const date = await getDate(); // use as title for card
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const { data: wod } = await supabase
    .from('wods')
    .select('*')
    .eq('date', formattedDate)
    .single();

  const { data: userTimes } = await supabase
    .from('user_completed_wods')
    .select('*')
    .eq('wod_id', wod?.id)
    .order('time_taken', { ascending: true })
    .limit(10);

  // const workoutDetails = {
  //   workout: wod?.workout,
  //   title: wod?.title,
  //   notes: wod?.notes
  // };

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Workout of the Day" text="Start Training" />
      </div>
      <WorkoutOfTheDay date={date} workoutDetails={wod} wodTimes={userTimes} />
    </div>
  );
}
