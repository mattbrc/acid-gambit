import { getSession, getSubscription } from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Nutrition() {
  const supabase = createServerComponentClient({
    cookies
  });

  const subscription = await getSubscription();
  const session = await getSession();
  const userId = session?.user.id;
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name')
    .eq('id', userId);

  return (
    <div>
      <div className="pb-2">
        <DashboardHeader
          heading="Nutrition"
          text="View your nutrition goals."
        />
      </div>
    </div>
  );
}
