import CardSkeleton from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';

export default function ProfileLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Profile"
        text="Edit your profile and settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
