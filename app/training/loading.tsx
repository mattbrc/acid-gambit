import CardSkeleton from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';

export default function TrainingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Training" text="Start/View your programs." />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
