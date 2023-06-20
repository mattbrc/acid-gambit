'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';

interface DashboardCardProps {
  program: string | null;
}

export function DashboardCard({ program }: DashboardCardProps) {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Start a Training Program</CardTitle>
          <CardDescription>Juh</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {program !== null ? (
              <div>
                <p>Current Program: {program}</p>
                <p>Today's Workout</p>
              </div>
            ) : (
              <p>No current program. Select one below and start training!</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          {/* <Link className="w-full" href="/training">
            <Button className="w-full">Training Dashboard</Button>
          </Link> */}
        </CardFooter>
      </Card>
    </div>
  );
}
