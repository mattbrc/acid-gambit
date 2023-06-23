import {
  getSession,
  getSubscription,
  getUserDetails
} from '@/app/supabase-server';
import { DashboardHeader } from '@/components/header';
import { UserProfileForm } from './user-profile-form';

export default async function Profile() {
  const subscription = await getSubscription();
  const session = await getSession();
  const user = await getUserDetails();
  return (
    <div>
      <div className="pb-2">
        <DashboardHeader
          heading="Profile"
          text="Edit your profile and settings."
        />
        <UserProfileForm user={user} />
      </div>
    </div>
  );
}
