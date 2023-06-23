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

export default async function Dashboard() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader heading="Home" text="Your training home." />
      </div>
      <TrainingCard program={userDetails?.current_program || null} />
      <WodCard />
      <LearnCard />
    </div>
  );
}
