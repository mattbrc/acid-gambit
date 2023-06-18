import CardSkeleton from '@/components/card-skeleton';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';

export default function NutritionLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Nutrition" text="View your nutrition goals." />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
