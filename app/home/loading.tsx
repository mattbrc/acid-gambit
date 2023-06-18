import CardSkeleton from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';

export default function HomeLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Home" text="Your training home." />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
