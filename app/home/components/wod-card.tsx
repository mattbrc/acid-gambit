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

export function WodCard() {
  return (
    <div className="pt-2 pb-2">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Workout of the Day</CardTitle>
          <CardDescription>View today's WOD.</CardDescription>
        </CardHeader>

        <CardFooter>
          <Link className="w-full" href="/wod">
            <Button className="w-full">View WOD</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
