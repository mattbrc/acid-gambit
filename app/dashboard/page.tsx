import { getSession } from '../supabase-server';
import UserDashboard from './user-dashboard';
import { DashboardHeader } from '@/components/header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerComponentClient({
    cookies
  });
  const session = await getSession();
  const userId = session?.user.id;
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', userId);

  const name = profile?.[0]?.full_name || profile?.[0].username || '';

  // user dash
  // get user
  // active program?
  // display profile card
  // browse programs / view active program card
  // learn / training knowledge base

  return (
    <div>
      <DashboardHeader heading="Training Dashboard" text={`Welcome ${name}`} />
      <pre>{JSON.stringify(userId, null, 2)}</pre>
      {/* <pre>{JSON.stringify(name, null, 2)}</pre> */}
    </div>
  );
}
