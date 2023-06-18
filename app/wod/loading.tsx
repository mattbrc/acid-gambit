import CardSkeleton from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';

export default function WodLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Workout of the Day" text="Start Training" />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
