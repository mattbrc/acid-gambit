'use client';

import { DashboardSubHeader } from '@/components/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

// interface DashboardCardProps {
//   program: string | null;
// }

export function ProgramList() {
  return (
    <div className="pt-2 pb-2">
      <DashboardSubHeader
        heading="Select a Training Program"
        text="So many options!"
      />
      <div className="pt-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Hybrid Athlete</CardTitle>
            <CardDescription>So many options!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          {/* <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Select a Training Program</CardTitle>
          <CardDescription>So many options!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Separator />
        </CardContent> */}
          <CardFooter>
            <Link className="w-full" href="/training">
              <Button className="w-full">Start Program</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
